<?php

namespace Drupal\eleague_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides a 'two_btn_header' block.
 *
 * @Block(
 *  id = "two_btn_header",
 *  admin_label = @Translation("Two Btn Header"),
 * )
 */
class two_btn_header extends BlockBase {


  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
         'image_banner_url' => $this->t(''),
         'top_title' => $this->t(''),
         'top_summary' => $this->t(''),
         'top_btn_text' => $this->t(''),
         'top_btn_url' => $this->t(''),
         'bottom_title' => $this->t(''),
         'bottom_summary' => $this->t(''),
         'bottom_btn_text' => $this->t(''),
         'bottom_btn_url' => $this->t(''),
        ] + parent::defaultConfiguration();

 }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form['image_banner_url'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Image Thumbnail URL'),
      '#description' => $this->t(''),
      '#default_value' => $this->configuration['image_banner_url'],
      '#maxlength' => 256,
      '#size' => 64,
      '#weight' => '0',
    ];

      $form['iframe_url'] = [
          '#type' => 'textfield',
          '#title' => $this->t('Youtube Video ID'),
          '#description' => $this->t(''),
          '#default_value' => $this->configuration['iframe_url'],
          '#maxlength' => 512,
          '#size' => 64,
          '#weight' => '0',
      ];
    $form['top_title'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Top Title'),
      '#description' => $this->t(''),
      '#default_value' => $this->configuration['top_title'],
      '#maxlength' => 64,
      '#size' => 64,
      '#weight' => '0',
    ];
    $form['top_summary'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Top Summary'),
      '#description' => $this->t(''),
      '#default_value' => $this->configuration['top_summary'],
      '#weight' => '0',
    ];
    $form['top_btn_text'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Top Btn Text'),
      '#description' => $this->t(''),
      '#default_value' => $this->configuration['top_btn_text'],
      '#maxlength' => 64,
      '#size' => 64,
      '#weight' => '0',
    ];
    $form['top_btn_url'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Top Btn URL'),
      '#description' => $this->t(''),
      '#default_value' => $this->configuration['top_btn_url'],
      '#maxlength' => 256,
      '#size' => 64,
      '#weight' => '0',
    ];
    $form['bottom_title'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Bottom Title'),
      '#description' => $this->t(''),
      '#default_value' => $this->configuration['bottom_title'],
      '#maxlength' => 64,
      '#size' => 64,
      '#weight' => '0',
    ];
    $form['bottom_summary'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Bottom Summary'),
      '#description' => $this->t(''),
      '#default_value' => $this->configuration['bottom_summary'],
      '#weight' => '0',
    ];
    $form['bottom_btn_text'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Bottom Btn Text'),
      '#description' => $this->t(''),
      '#default_value' => $this->configuration['bottom_btn_text'],
      '#maxlength' => 64,
      '#size' => 64,
      '#weight' => '0',
    ];
    $form['bottom_btn_url'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Bottom Btn URL'),
      '#description' => $this->t(''),
      '#default_value' => $this->configuration['bottom_btn_url'],
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
    $this->configuration['image_banner_url'] = $form_state->getValue('image_banner_url');
    $this->configuration['iframe_url'] = $form_state->getValue('iframe_url');
    $this->configuration['top_title'] = $form_state->getValue('top_title');
    $this->configuration['top_summary'] = $form_state->getValue('top_summary');
    $this->configuration['top_btn_text'] = $form_state->getValue('top_btn_text');
    $this->configuration['top_btn_url'] = $form_state->getValue('top_btn_url');
    $this->configuration['bottom_title'] = $form_state->getValue('bottom_title');
    $this->configuration['bottom_summary'] = $form_state->getValue('bottom_summary');
    $this->configuration['bottom_btn_text'] = $form_state->getValue('bottom_btn_text');
    $this->configuration['bottom_btn_url'] = $form_state->getValue('bottom_btn_url');
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['two_btn_header_image_banner_url'] = $this->configuration['image_banner_url'];
    $build['iframe_url'] = $this->configuration['iframe_url'];
    $build['two_btn_header_top_title'] = $this->configuration['top_title'];
    $build['two_btn_header_top_summary'] = $this->configuration['top_summary'];
    $build['two_btn_header_top_btn_text'] = $this->configuration['top_btn_text'];
    $build['two_btn_header_top_btn_url'] = $this->configuration['top_btn_url'];
    $build['two_btn_header_bottom_title'] = $this->configuration['bottom_title'];
    $build['two_btn_header_bottom_summary'] = $this->configuration['bottom_summary'];
    $build['two_btn_header_bottom_btn_text'] = $this->configuration['bottom_btn_text'];
    $build['two_btn_header_bottom_btn_url'] = $this->configuration['bottom_btn_url'];

    return $build;
  }

}
