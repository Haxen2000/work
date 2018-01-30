<?php

namespace Drupal\eleague_schedules\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\field_collection\Entity\FieldCollectionItem;
use Drupal\node\Entity\Node;

/**
 * Provides a 'ELMPS_large' block.
 *
 * @Block(
 *id = "elmps_large",
 *admin_label = @Translation("ELMP Large Block"),
 * )
 */
class ELMPS_large extends BlockBase {
  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
       'multiplayer_schedule_name' => $this->t(''),
      ] + parent::defaultConfiguration();
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form['multiplayer_schedule_name'] = [
    '#type' => 'textfield',
    '#title' => $this->t('MultiPlayer Schedule Name'),
    '#description' => $this->t('Enter the Multiplayer Schedule Name (note: this field is case sensitive)'),
    '#default_value' => $this->configuration['multiplayer_schedule_name'],
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
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];

    //load the node by the title
    $nodes = \Drupal::entityTypeManager()
      ->getStorage('node')
      ->loadByProperties(['title' => $this->configuration['multiplayer_schedule_name']]);

    //if we found the node
    if ($node = reset($nodes)) {
      $build['field_emps_end_date'] = $node->field_emps_end_date->value;
      $build['field_emps_start_date'] = $node->field_emps_start_date->value;
      $build['field_emps_json_id'] = $node->field_emps_json_id->value;

      //loop through the weeks in the schedule
      foreach ($node->field_emps_weeks->getValue() as $key => $item) {
        $fc = FieldCollectionItem::load($item['value']);
        $build['field_emps_weeks'][$key]['field_emps_weeks_stage'] = $fc->field_emps_stage->value;
        if (count($fc->field_emps_label->getValue()) > 0) {
          $build['field_emps_weeks'][$key]['field_emps_weeks_label'] = $fc->field_emps_label->value;
        }

        //loop through the days in the weeks
        foreach($fc->field_emps_days->getValue() as $key1 => $item1) {
          $fcdays = FieldCollectionItem::load($item1['value']);
          $build['field_emps_weeks'][$key]['field_emps_days'][$key1]['field_emps_days_start'] = $fcdays->field_emps_start_time->value;
          if ($fcdays->field_emps_day_label) {
            $build['field_emps_weeks'][$key]['field_emps_days'][$key1]['field_emps_day_label‎'] = $fcdays->field_emps_day_label->value;
          }

          //loop through the matches
          foreach($fcdays->field_emps_match->getValue() as $key2 => $item2) {
            $fcmatch = FieldCollectionItem::load($item2['value']);
            $build['field_emps_weeks'][$key]['field_emps_days'][$key1]['field_emps_match'][$key2]['tbs'] = $fcmatch->field_match_tbs->value;
            $build['field_emps_weeks'][$key]['field_emps_days'][$key1]['field_emps_match'][$key2]['game_command'] = $fcmatch->field_match_game_command->value;
            $build['field_emps_weeks'][$key]['field_emps_days'][$key1]['field_emps_match'][$key2]['field_emps_match_state'] = $fcmatch->field_emps_state->value;
            $build['field_emps_weeks'][$key]['field_emps_days'][$key1]['field_emps_match'][$key2]['field_emps_match_best_of'] = $fcmatch->field_emps_best_of->value;
            $build['field_emps_weeks'][$key]['field_emps_days'][$key1]['field_emps_match'][$key2]['field_match_title'] = $fcmatch->field_match_title2->value;
            $build['field_emps_weeks'][$key]['field_emps_days'][$key1]['field_emps_match'][$key2]['field_match_id'] = $fcmatch -> field_match_id -> value;

            //loop through the teams
            foreach($fcmatch->field_emps_teams->getValue() as $key3 => $item3) {
              $fcteam = FieldCollectionItem::load($item3['value']);
              if (count($fcteam->field_elmp_team) != 0) { //if count == 0, team tbd
                if (count($fcteam->field_score->getValue()) > 0) {
                  $build['field_emps_weeks'][$key]['field_emps_days'][$key1]['field_emps_match'][$key2]['field_emps_teams'][$key3]['field_emps_team_score'] = $fcteam->field_score->value;
                }
                $team_content = Node::load($fcteam->field_elmp_team->getValue()[0]['target_id']);
                $build['field_emps_weeks'][$key]['field_emps_days'][$key1]['field_emps_match'][$key2]['field_emps_teams'][$key3]['field_emps_team_title'] = $team_content->getTitle();
                $build['field_emps_weeks'][$key]['field_emps_days'][$key1]['field_emps_match'][$key2]['field_emps_teams'][$key3]['field_emps_team_logo'] = file_create_url(\Drupal\file\Entity\File::load($team_content->field_logo_small->target_id)->getFileUri());
                $build['field_emps_weeks'][$key]['field_emps_days'][$key1]['field_emps_match'][$key2]['field_emps_teams'][$key3]['field_team_json_id'] = $team_content->field_team_json_id->value;

                $fcplayers = Node::load($fcteam->field_elmp_team->getValue()[0]['target_id'])->field_team_players->getValue();
                foreach($fcplayers as $key4 => $item4) {
                  $fc_team_player = Node::load($item4['target_id']);
                  $fc_player = Node::load($fc_team_player->field_player_team->getValue()[0]['target_id']);
                  if ($fc_team_player->field_headshot) {
                    $build['field_emps_weeks'][$key]['field_emps_days'][$key1]['field_emps_match'][$key2]['field_emps_teams'][$key3]['field_team_players'][$key4]['field_headshot'] = file_create_url(\Drupal\file\Entity\File::load($fc_team_player->field_headshot->getValue()[0]['target_id'])->getFileUri());
                  }
                  $build['field_emps_weeks'][$key]['field_emps_days'][$key1]['field_emps_match'][$key2]['field_emps_teams'][$key3]['field_team_players'][$key4]['field_gamertag'] = $fc_player->field_gamertag->value;
                  $build['field_emps_weeks'][$key]['field_emps_days'][$key1]['field_emps_match'][$key2]['field_emps_teams'][$key3]['field_team_players'][$key4]['field_country'] = $fc_player->field_country->value;
                  $build['field_emps_weeks'][$key]['field_emps_days'][$key1]['field_emps_match'][$key2]['field_emps_teams'][$key3]['field_team_players'][$key4]['field_full_name'] = $fc_player->field_full_name->value;
                  if ($fc_team_player->field_data_el_id) {
                    $build['field_emps_weeks'][$key]['field_emps_days'][$key1]['field_emps_match'][$key2]['field_emps_teams'][$key3]['field_team_players'][$key4]['field_data_el_id'] = $fc_team_player->field_data_el_id->value;
                  }
                }
              }
            }

            //loop through the maps
            $build['field_emps_weeks'][$key]['field_emps_days'][$key1]['field_emps_match'][$key2]['field_maps'] = []; //needs to be defined for twig
            if ($fcmatch->field_emps_best_of->value == 3 && $fcmatch->field_emps_state->value != 'pre') {
              foreach($fcmatch->field_emps_maps->getValue() as $key3 => $item3) {
                $fcmap = FieldCollectionItem::load($item3['value']);
                $build['field_emps_weeks'][$key]['field_emps_days'][$key1]['field_emps_match'][$key2]['field_maps'][$key3]['field_map_names'] = $fcmap->field_map->value;
            
                //loop through the teams
                foreach($fcmap->field_emps_teams->getValue() as $key4 => $item4) {
                  $fcteam2 = FieldCollectionItem::load($item4['value']);
                  $build['field_emps_weeks'][$key]['field_emps_days'][$key1]['field_emps_match'][$key2]['field_maps'][$key3]['field_emps_teams'][$key4]['field_emps_team_score'] = $fcteam2->field_score->value;
                  $build['field_emps_weeks'][$key]['field_emps_days'][$key1]['field_emps_match'][$key2]['field_maps'][$key3]['field_emps_teams'][$key4]['field_emps_team_title'] = Node::load($fcteam2->field_elmp_team->getValue()[0]['target_id'])->getTitle();
                  $build['field_emps_weeks'][$key]['field_emps_days'][$key1]['field_emps_match'][$key2]['field_maps'][$key3]['field_emps_teams'][$key4]['field_emps_team_logo'] = file_create_url(\Drupal\file\Entity\File::load(node::load($fcteam2->field_elmp_team->getValue()[0]['target_id'])->field_logo_small->target_id)->getFileUri());
                }
              }
            }
          }
        }
      }
    }
    else {
      $build['elmps_large_multiplayer_schedule_name']['#markup'] = '<p>No schedule found.</p>';
    }

    return $build;
  }
}
