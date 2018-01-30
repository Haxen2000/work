<?php

namespace Drupal\eleague_schedules\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\field_collection\Entity\FieldCollectionItem;
use Drupal\node\Entity\Node;

/**
 * Provides a 'ELMPS_scoring_strip' block.
 *
 * @Block(
 *  id = "elmps_scoring_strip",
 *  admin_label = @Translation("Scoring Strip Block"),
 * )
 */
class ELMPS_scoring_strip extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form['multiplayer_schedule_name'] = [
	    '#type' => 'textfield',
	    '#title' => $this->t('MultiPlayer Schedule Name'),
	    '#description' => $this->t('Enter the Multiplayer Schedule Name'),
	    '#default_value' => $this->configuration['multiplayer_schedule_name'],
	    '#maxlength' => 64,
	    '#size' => 64,
	    '#weight' => '0',
    ];

    $form['schedule_link'] = [
	    '#type' => 'textfield',
	    '#title' => $this->t('Full Schedule Link'),
	    '#description' => $this->t('Enter the link to the schedule page'),
	    '#default_value' => $this->configuration['schedule_link'],
	    '#maxlength' => 64,
	    '#size' => 64,
	    '#weight' => '0',
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    $this->configuration['multiplayer_schedule_name'] = $form_state->getValue('multiplayer_schedule_name');
    $this->configuration['schedule_link'] = $form_state->getValue('schedule_link');
  }

  public function build() {
    $build = [];
    
    //load the node by the title
    $nodes = \Drupal::entityTypeManager()
    	->getStorage('node')
    	->loadByProperties(['title' => $this->configuration['multiplayer_schedule_name']]);

    //if we found the node
    if ($node = reset($nodes)) {
		$today = getdate();
		$today_frmt = substr($today['weekday'], 0, 3) . ', ' . substr($today['month'], 0 , 3) . ' ' . $today['mday'] . ' ' . $today['year'];
		$end_date = $node->get('field_emps_end_date')->getValue()[0]['value'];
		$start_date = $node->get('field_emps_start_date')->getValue()[0]['value'];

		$args = [$this->configuration['multiplayer_schedule_name']];
		$view = \Drupal\views\Views::getView('todays_mp_schedule');
		if (is_object($view)) {
			$view->setArguments($args);
			$view->setDisplay('rest_export_1');
			$view->preExecute();
			$render = $view->render();
			$view_result = \Drupal::service('renderer')->renderRoot($render);
			$view_json_decode = json_decode($view_result);
		}
		$end_date = getdate($end_date);
		$start_date = getdate($start_date);
		//get first day
		if ($today[0] < $start_date[0]) {
			$build = $this->buildDay($view_json_decode[0], $build);
			$build['day_num'] = 1;
		}
		//get last day
		else if ($today[0] > $end_date[0]) {
			$build = $this->buildDay($view_json_decode[count($view_json_decode) - 1], $build);
			$build['day_num'] = count($view_json_decode);
		}
		else{
			//loop through the days in the schedule
			foreach ($view_json_decode as $key1 => $day) {
				$date = explode(' | ', $day -> field_emps_start_time)[0];
				if ($date == $today_frmt || (strtotime($date) > $today[0] && !count($build))) {
					$newdata = $this -> buildDay($day, $build);
					if (count($build) > 0) {
						$currmatches = $build['matches'];
						$build = $newdata;
						$build['matches'] = array_merge($currmatches, $build['matches']);
					}
					else {
						$build = $newdata;
					}
					$build['day_num'] = $key1 + 1;
				}
			}
		}
    }
    else {
      $build['elmps_scoring_strip']['#markup'] = 'Implement ELMPS_scoring_strip.';
    }
    return $build;
  }

  public function buildDay($day, $build) {
  	$date = $day -> field_emps_start_time;
	//$build['stage'] = $day -> field_emps_stage;
	$build['game'] = $this -> configuration['label'];
	$build['date'] = explode(' | ', $date)[0];
	$build['start_time'] = explode(' | ', $date)[1];
	$build['link'] = $this -> configuration['schedule_link'];
	$build['json_id'] = $day -> field_emps_json_id;
	$matches = $day -> field_emps_match;
	//loop through the matches
	$matchCount = 0;
	foreach($matches as $key => $matchnum) {
		$match = FieldCollectionItem::load($matchnum);
		$build['best_of'] = $match -> get('field_emps_best_of') -> getValue()[0]['value'];

		if ($build['best_of'] == 3) {
			if ($match -> get('field_emps_state') -> getValue()[0]['value'] != 'pre') { //loop through the maps
				foreach($match->get('field_emps_maps')->getValue() as $key1 => $item1) {
					$map = FieldCollectionItem::load($item1['value']);
					$build['matches'][$matchCount]['map'] = $map->get('field_map')->getValue()[0]['value'];
					$build['matches'][$matchCount]['state'] = $match -> field_emps_state -> value;
					$build['matches'][$matchCount]['map_index'] = $key1;

					//loop through the teams
					foreach($map->get('field_emps_teams')->getValue() as $key2 => $item2) {
						$team = FieldCollectionItem::load($item2['value']);
						$team_content = Node::load($team->get('field_elmp_team')->getValue()[0]['target_id']);
						$build['matches'][$matchCount]['teams'][$key2]['score'] = $team -> field_score -> value;
						if ($matchCount > 0 && $team -> field_score -> value != '' && $match -> field_emps_state -> value == 'live' && $build['matches'][$matchCount - 1]['state'] == 'live') {
							$build['matches'][$matchCount - 1]['state'] = 'final';
						}
						else if ($matchCount > 0 && $team -> field_score -> value == '' && $match -> field_emps_state -> value == 'live' && $build['matches'][$matchCount - 1]['state'] == 'live') {
							$build['matches'][$matchCount]['state'] = 'pre';
						}
						$build['matches'][$matchCount]['teams'][$key2]['title'] = $team_content -> getTitle();
						if (count($team_content -> field_scoring_strip_logo) > 0) {
							$build['matches'][$matchCount]['teams'][$key2]['logo'] = file_create_url(\Drupal\file\Entity\File::load($team_content->field_scoring_strip_logo->target_id)->getFileUri());
						}
						else {
							$build['matches'][$matchCount]['teams'][$key2]['logo'] = file_create_url(\Drupal\file\Entity\File::load($team_content->field_logo_small->target_id)->getFileUri());
						}
						$build['matches'][$matchCount]['teams'][$key2]['json_id'] = $team_content->field_team_json_id->value;
					}
					$matchCount++;
				}
			}
			else { //create 3 blank matches
				for ($i = 0; $i < 3; $i++) {
					$build['matches'][$matchCount]['match_id'] = $match -> field_match_id -> value;
					$build['matches'][$matchCount]['state'] = 'pre';
					$build['matches'][$matchCount]['map_index'] = $i;
					foreach($match -> get('field_emps_teams') -> getValue() as $key2 => $item2) {
						$team = FieldCollectionItem::load($item2['value']);
						$build['matches'][$matchCount]['teams'][$key2]['score'] = '0';
						$team_content = Node::load($team->get('field_elmp_team')->getValue()[0]['target_id']);
						$build['matches'][$matchCount]['teams'][$key2]['title'] = $team_content -> getTitle();
						if (count($team_content -> field_scoring_strip_logo) > 0) {
							$build['matches'][$matchCount]['teams'][$key2]['logo'] = file_create_url(\Drupal\file\Entity\File::load($team_content->field_scoring_strip_logo->target_id)->getFileUri());
						}
						else {
							$build['matches'][$matchCount]['teams'][$key2]['logo'] = file_create_url(\Drupal\file\Entity\File::load($team_content->field_logo_small->target_id)->getFileUri());
						}
	              	    $build['matches'][$matchCount]['teams'][$key2]['json_id'] = $team_content->field_team_json_id->value;
					}
					$matchCount++;
				}
			}
		}
		else {
			//loop through the teams
			$build['matches'][$matchCount]['match_id'] = $match -> field_match_id -> value;
			$build['matches'][$matchCount]['state'] = $match -> field_emps_state -> value;
			$build['matches'][$matchCount]['map_index'] = 0;
			foreach($match -> get('field_emps_teams') -> getValue() as $key2 => $item2) {
				$team = FieldCollectionItem::load($item2['value']);
				$team_content = Node::load($team->get('field_elmp_team')->getValue()[0]['target_id']);
				if (count($team->get('field_elmp_team')) != 0) { //if count == 0, team tbd
					$build['matches'][$matchCount]['teams'][$key2]['score'] = $team -> field_score -> value;
					$build['matches'][$matchCount]['teams'][$key2]['title'] = $team_content->getTitle();
					if (count($team_content -> field_scoring_strip_logo) > 0) {
						$build['matches'][$matchCount]['teams'][$key2]['logo'] = file_create_url(\Drupal\file\Entity\File::load($team_content->field_scoring_strip_logo->target_id)->getFileUri());
					}
					else {
						$build['matches'][$matchCount]['teams'][$key2]['logo'] = file_create_url(\Drupal\file\Entity\File::load($team_content->field_logo_small->target_id)->getFileUri());
					}
					$build['matches'][$matchCount]['teams'][$key2]['json_id'] = $team_content->field_team_json_id->value;
				}
			}
			$matchCount++;
		}
	}
	return $build;
  }

}
