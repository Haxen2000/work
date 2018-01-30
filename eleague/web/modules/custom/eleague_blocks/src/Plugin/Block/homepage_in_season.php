<?php

namespace Drupal\eleague_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\node\Entity\Node;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Path\AliasManager;

/**
 * Provides a 'homepage_in_season' block.
 *
 * @Block(
 *  id = "homepage_in_season",
 *  admin_label = @Translation("Homepage In Season Block"),
 * )
 */
class homepage_in_season extends BlockBase implements ContainerFactoryPluginInterface {

  /**
   * Drupal\Core\Path\AliasManager definition.
   *
   * @var \Drupal\Core\Path\AliasManager
   */
  protected $pathAliasManager;
  /**
   * Constructs a new delete object.
   *
   * @param array $configuration
   *   A configuration array containing information about the plugin instance.
   * @param string $plugin_id
   *   The plugin_id for the plugin instance.
   * @param string $plugin_definition
   *   The plugin implementation definition.
   */
  public function __construct(
    array $configuration,
    $plugin_id,
    $plugin_definition,
    AliasManager $path_alias_manager
  ) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->pathAliasManager = $path_alias_manager;
  }
  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('path.alias_manager')
    );
  }


  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
         'left_article' => $this->t(''),
         'right_article' => $this->t(''),
        ] + parent::defaultConfiguration();

 }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form['in_season_title'] = [
      '#type' => 'textfield',
      '#title' => $this->t('In Season Title'),
      '#description' => $this->t('Title to display above section'),
      '#default_value' => $this->configuration['in_season_title'],
      '#maxlength' => 255,
      '#size' => 64,
      '#weight' => '0',
    ];
    $form['in_season_subtitle'] = [
      '#type' => 'textfield',
      '#title' => $this->t('In Season Subtitle'),
      '#description' => $this->t('Text to display below the In Season title'),
      '#default_value' => $this->configuration['in_season_subtitle'],
      '#maxlength' => 255,
      '#size' => 64,
      '#weight' => '0',
    ];
    $form['left_article'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Left Article'),
      '#description' => $this->t('Article to display on left side'),
      '#default_value' => $this->configuration['left_article'],
      '#maxlength' => 64,
      '#size' => 64,
      '#weight' => '0',
    ];
    $form['right_article'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Right Article'),
      '#description' => $this->t('Article to display on right side'),
      '#default_value' => $this->configuration['right_article'],
      '#maxlength' => 64,
      '#size' => 64,
      '#weight' => '1',
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    $this->configuration['in_season_title'] = $form_state->getValue('in_season_title');
    $this->configuration['in_season_subtitle'] = $form_state->getValue('in_season_subtitle');
    $this->configuration['left_article'] = $form_state->getValue('left_article');
    $this->configuration['right_article'] = $form_state->getValue('right_article');
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];

    $build['in_season_title'] =  $this->configuration['in_season_title'];
    $build['in_season_subtitle'] =  $this->configuration['in_season_subtitle'];

    //load the node by the title
    $nodes = \Drupal::entityTypeManager()
      ->getStorage('node')
      ->loadByProperties(['title' => $this->configuration['left_article']]);

    //if we found the node for the left article
    if ($node = reset($nodes)) {
      $build['left_article_link'] = $this->pathAliasManager->getAliasByPath('/node/'.$node->id());
      $build['left_article_title'] = $this->configuration['left_article'];
      $build['left_article_author'] = $node->get('field_author')->value;
      $build['left_article_date'] = $node->get('field_publish_date')->value;
      $file = \Drupal\file\Entity\File::load($node->get('field_article_image')->target_id);
      $build['left_article_image'] = file_create_url($file->getFileUri());
      $build['left_article_img_alttext'] = $node->get('field_article_image')->alt;
    }


    //load the node by the title
    $nodes = \Drupal::entityTypeManager()
      ->getStorage('node')
      ->loadByProperties(['title' => $this->configuration['right_article']]);

    //if we found the node for the right article
    if ($node = reset($nodes)) {
      $build['right_article_link'] = $this->pathAliasManager->getAliasByPath('/node/'.$node->id());
      $build['right_article_title'] = $this->configuration['right_article'];
      $build['right_article_author'] = $node->get('field_author')->value;
      $build['right_article_date'] = $node->get('field_publish_date')->value;
      $file = \Drupal\file\Entity\File::load($node->get('field_article_image')->target_id);
      $build['right_article_image'] = file_create_url($file->getFileUri());
      $build['right_article_img_alttext'] = $node->get('field_article_image')->alt;
    }

    return $build;
  }

}
