<?php

namespace Drupal\eleague_schedules\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\field_collection\Entity\FieldCollectionItem;
use Drupal\node\Entity\Node;

/**
 * Provides a 'Bracket' block.
 *
 * @Block(
 *  id = "bracket",
 *  admin_label = @Translation("Bracket"),
 * )
 */
class Bracket extends BlockBase {
	public function defaultConfiguration() {
		return [
			'multiplayer_schedule_name' => $this->t(''),
			'bracket_type' => $this->t('--- SELECT ---'),
		] + parent::defaultConfiguration();
	}

	public function blockForm($form, FormStateInterface $form_state) {
		$form['multiplayer_schedule_name'] = [
			'#type' => 'textfield',
			'#title' => $this->t('MultiPlayer Schedule Name'),
			'#description' => $this->t('Enter the Multiplayer Schedule Name (note: this field is case sensitive)'),
			'#default_value' => $this->configuration['multiplayer_schedule_name'],
			'#maxlength' => 64,
			'#size' => 64,
			'#weight' => '0'
		];

		$form['bracket_type'] = [
			'#type' => 'select',
			'#title' => $this->t('Bracket Type'),
			'#options' => [
				t('--- SELECT ---'),
				'standard-8' => t('8 Team Standard'),
				'dubel-4' => t('4 Team Double Elim'),
				'dubel-8' => t('8 Team Double Elim'),
				'sfv-group' => t('SFV Group'),
				'sfv-playoffs' => t('SFV Playoffs'),
			],
			'#default_value' => $this->configuration['bracket_type'],
			'#size' => 1,
			'#weight' => '0'
		];

		return $form;
	}

	public function blockSubmit($form, FormStateInterface $form_state) {
		$this->configuration['multiplayer_schedule_name'] = $form_state->getValue('multiplayer_schedule_name');
		$this->configuration['bracket_type'] = $form_state->getValue('bracket_type');
	}

	public function build() {
		$build = [];
		//load the node by the title
		$nodes = \Drupal::entityTypeManager()
			->getStorage('node')
			->loadByProperties(['title' => $this->configuration['multiplayer_schedule_name']]);

		//if we found the node
		if ($node = reset($nodes)) {
			$matches = [];
			$build['bracket_type'] = $this->configuration['bracket_type'];
			if ($build['bracket_type'] == 'standard-8') {
				//loop through the weeks in the schedule
				foreach ($node -> field_emps_weeks -> getValue() as $key => $item) {
					$week = FieldCollectionItem::load($item['value']);
					//loop through the days in the weeks
					foreach($week -> field_emps_days -> getValue() as $key1 => $item1) {
						$day = FieldCollectionItem::load($item1['value']);
						//loop through the matches
						foreach($day -> field_emps_match -> getValue() as $key2 => $item2) {
							$match = FieldCollectionItem::load($item2['value']);
							$match -> match_day = $day -> field_emps_start_time -> value;
							$match -> match_stage = $week -> field_emps_stage -> value;
							$matches[] = $match;
						}
					}
				}
				array_splice($matches, 0, count($matches) - 7);
				//loop through the matches
				foreach($matches as $key => $match) {
					$build['match'][$key]['state'] = $match -> field_emps_state -> value;
					$build['match'][$key]['date'] = $match -> match_day;
					$build['match'][$key]['stage'] = $match -> match_stage;
					//loop through the teams
					foreach($match -> field_emps_teams -> getValue() as $key2 => $item2) {
						$team = FieldCollectionItem::load($item2['value']);
						if (count($team->field_elmp_team) != 0) { //if count == 0, team tbd
							$team_content = Node::load($team -> field_elmp_team -> getValue()[0]['target_id']);
							//dump($team_content);
							if (count($team->field_score->getValue()) > 0) {
								$build['match'][$key]['team'][$key2]['score'] = $team -> field_score -> value;
							}
							$build['match'][$key]['team'][$key2]['title'] = $team_content -> getTitle();
							if (count($team_content -> field_scoring_strip_logo) > 0) {
								$build['match'][$key]['team'][$key2]['logo'] = file_create_url(\Drupal\file\Entity\File::load($team_content -> field_scoring_strip_logo -> target_id)->getFileUri());
							}
							else {
								$build['match'][$key]['team'][$key2]['logo'] = file_create_url(\Drupal\file\Entity\File::load($team_content -> field_logo_small -> target_id)->getFileUri());
							}
							$build['match'][$key]['team'][$key2]['json_id'] = $team_content -> field_team_json_id -> value;
							$build['match'][$key]['team'][$key2]['href'] = \Drupal::service('path.alias_manager')->getAliasByPath('/node/' . $team_content -> nid -> value, 'en');
						}
					}
				}
			}
		}
		else {
			$build['bracket']['#markup'] = 'Implement Bracket.';
		}
		return $build;
	}

}
