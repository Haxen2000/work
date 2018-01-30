<?php

namespace Drupal\eleague_schedules\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\field_collection\Entity\FieldCollectionItem;
use Drupal\node\Entity\Node;
use Drupal\views\Plugin\views\field\Field;

/**
 * Provides a 'ELSPS_large' block.
 *
 * @Block(
 *  id = "elsps_large",
 *  admin_label = @Translation("ELSP Large Block"),
 * )
 */
class ELSPS_large extends BlockBase {


  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
         'singleplayer_schedule_name' => $this->t(''),
        ] + parent::defaultConfiguration();

 }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form['singleplayer_schedule_name'] = [
      '#type' => 'textfield',
      '#title' => $this->t('SinglePlayer Schedule Name'),
      '#description' => $this->t('Enter the Singleplayer Schedule Name (note: this field is case sensitive)'),
      '#default_value' => $this->configuration['singleplayer_schedule_name'],
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
    $this->configuration['singleplayer_schedule_name'] = $form_state->getValue('singleplayer_schedule_name');
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
      $build = [];

      //load the node by the title
      $nodes = \Drupal::entityTypeManager()
          ->getStorage('node')
          ->loadByProperties(['title' => $this->configuration['singleplayer_schedule_name']]);

      //if we found the node
      if ($node = reset($nodes)) {

            $build['field_title'] = $node->getTitle();
            //loop through the weeks in the schedule
            foreach($node->get('field_elsp_weeks')->getValue() as $key => $item) {
              $fc = FieldCollectionItem::load($item['value']);
              //loop through the days
              foreach($fc->get('field_elsp_days')->getValue() as $key2 => $item2) {
                $fcdays = FieldCollectionItem::load($item2['value']);
                //loop through the matches
                foreach($fcdays->get('field_elsp_matches')->getValue() as $key3 => $item3){
                  $fcmatches = FieldCollectionItem::load($item3['value']);
                  $build['field_elsp_match_index'][] = $fcmatches->get('field_elsp_index')->getValue()[0]['value'];
                  $build['field_elsp_bracket_status'][] = $fcmatches->get('field_bracket_status')->getValue()[0]['value'];
                  $build['field_elsp_broadcast'][] = $fcmatches->get('field_elsp_broadcast')->getValue()[0]['value'];
                  $build['field_elsp_is_complete'][] = $fcmatches->get('field_elsp_is_complete')->getValue()[0]['value'];
                  $build['field_elsp_start_time'][] = $fcmatches->get('field_elsp_start_time')->getValue()[0]['value'];
                  //loop through the games
                  foreach($fcmatches->get('field_elsp_game')->getValue() as $key4 => $item4) {
                    $fcgames = FieldCollectionItem::load($item4['value']);
                    $build['field_elsp_round_1_top_bottom'][] = $fcgames->get('field_round_1_top_bottom')->getValue()[0]['value'];
                    $build['field_elsp_round_2_top_bottom'][] = $fcgames->get('field_round_2_top_bottom')->getValue()[0]['value'];
                    $build['field_elsp_round_3_top_bottom'][] = $fcgames->get('field_round_3_top_bottom')->getValue()[0]['value'];
                  }
                  //now loop through the players in the games (we're still in the match loop)
                  foreach($fcmatches->get('field_elsp_players')->getValue() as $key5 => $item5) {
                    $fcplayers = FieldCollectionItem::load($item5['value']);
                    $build['field_elsp_player'][] = Node::load($fcplayers->get('field_elsp_player')->getValue()[0]['target_id'])->getTitle();
                    $build['field_player_top_bottom'][] = $fcplayers->get('field_top_bottom')->getValue()[0]['value'];
                  }

                }

              }


            }

      } else {
        $build['singleplayer_schedule_name']['#markup'] = '<p>No schedule found.</p>';
      }

    return $build;
  }

}
