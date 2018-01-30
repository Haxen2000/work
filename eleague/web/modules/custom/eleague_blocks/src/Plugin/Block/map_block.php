<?php

namespace Drupal\eleague_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides a 'map_block' block.
 *
 * @Block(
 *  id = "map_block",
 *  admin_label = @Translation("Map Block"),
 * )
 */
class map_block extends BlockBase {


  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
         'title' => $this->t(''),
         'map_link' => $this->t(''),
        ] + parent::defaultConfiguration();

 }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form['title'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Title'),
      '#description' => $this->t(''),
      '#default_value' => $this->configuration['title'],
      '#maxlength' => 64,
      '#size' => 64,
      '#weight' => '0',
    ];
    $form['map_link'] = [
      '#type' => 'textfield',
      '#title' => $this->t('map link'),
      '#description' => $this->t(''),
      '#default_value' => $this->configuration['map_link'],
      '#maxlength' => 500,
      '#size' => 128,
      '#weight' => '0',
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    $this->configuration['title'] = $form_state->getValue('title');
    $this->configuration['map_link'] = $form_state->getValue('map_link');
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['map_block_title'] = $this->configuration['title'];
    $build['map_block_map_link'] = $this->configuration['map_link'];

    return $build;
  }

}
