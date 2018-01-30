<?php

namespace Drupal\eleague_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides a 'gallery_of_galleries' block.
 *
 * @Block(
 *  id = "gallery_of_galleries",
 *  admin_label = @Translation("Gallery of Galleries Block"),
 * )
 */
class gallery_of_galleries extends BlockBase {


  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
         'gallery_node_id' => $this->t(''),
         'link' => $this->t(''),
        ] + parent::defaultConfiguration();

 }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form['gallery_node_id'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Gallery Node ID'),
      '#description' => $this->t(''),
      '#default_value' => $this->configuration['gallery_node_id'],
      '#maxlength' => 5,
      '#size' => 5,
      '#weight' => '0',
    ];
    $form['link'] = [
      '#type' => 'textfield',
      '#title' => $this->t('link'),
      '#description' => $this->t('include a link with a leading slash'),
      '#default_value' => $this->configuration['link'],
      '#maxlength' => 120,
      '#size' => 64,
      '#weight' => '0',
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    $this->configuration['gallery_node_id'] = $form_state->getValue('gallery_node_id');
    $this->configuration['link'] = $form_state->getValue('link');
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $node = \Drupal\node\Entity\Node::load($this->configuration['gallery_node_id']);
    $build['gallery_title'] = $node->getTitle();
    $build['gallery_image'] =  file_create_url(\Drupal\file\Entity\File::load($node->get('field_gallery_image')->target_id)->getFileUri());
    $build['gallery_date'] = $node->get('field_date_gallery_image')->value;
    $build['gallery_location'] = $node->get('field_location')->value;
    $build['gallery_of_galleries_link'] = $this->configuration['link'];

    return $build;
  }

}
