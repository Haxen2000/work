<?php

namespace Drupal\eleague_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides a 'iFrame' block.
 *
 * @Block(
 *  id = "i_frame",
 *  admin_label = @Translation("iFrame Block"),
 * )
 */
class iFrame extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'iframe' => $this->t(''),
    ] + parent::defaultConfiguration();
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form['iframe'] = [
      '#type' => 'textfield',
      '#title' => $this->t('iFrame'),
      '#description' => $this->t(''),
      '#default_value' => $this->configuration['iframe'],
      '#maxlength' => 512,
      '#size' => 64,
      '#weight' => '0',
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    $this->configuration['iframe'] = $form_state->getValue('iframe');
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['frame'] = $this->configuration['iframe'];

    return $build;
  }

}
