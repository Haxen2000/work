<?php

namespace Drupal\eleague_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides a 'live_now' block.
 *
 * @Block(
 *  id = "live_now",
 *  admin_label = @Translation("Live_now"),
 * )
 */
class live_now extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'textarea' => $this->t(''),
    ] + parent::defaultConfiguration();
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form['textarea'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Textarea'),
      '#description' => $this->t('you may use html'),
      '#default_value' => $this->configuration['textarea'],
      '#weight' => '0',
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    $this->configuration['textarea'] = $form_state->getValue('textarea');
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['live_now_textarea'] = $this->configuration['textarea'];

    return $build;
  }

}
