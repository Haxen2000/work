<?php

namespace Drupal\eleague_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides a 'landing_page_banner' block.
 *
 * @Block(
 *  id = "landing_page_banner",
 *  admin_label = @Translation("Landing Page Banner"),
 * )
 */
class landing_page_banner extends BlockBase {


  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
         'banner_image_relative_path' => $this->t(''),
        ] + parent::defaultConfiguration();

 }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form['banner_image_relative_path'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Banner image relative path'),
      '#description' => $this->t(''),
      '#default_value' => $this->configuration['banner_image_relative_path'],
      '#maxlength' => 256,
      '#size' => 64,
      '#weight' => '0',
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    $this->configuration['banner_image_relative_path'] = $form_state->getValue('banner_image_relative_path');
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['landing_page_banner_banner_image_relative_path']= $this->configuration['banner_image_relative_path'];

    return $build;
  }

}
