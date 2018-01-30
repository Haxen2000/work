<?php

namespace Drupal\eleague_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Url;

/**
 * Provides a 'landing_page_banner' block.
 *
 * @Block(
 *  id = "landing_page_banner_copy",
 *  admin_label = @Translation("Landing Page Banner Copy Block"),
 * )
 */
class landing_page_banner_copy extends BlockBase {


  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
         'title' => $this->t(''),
         'subtext_line_1' => $this->t(''),
         'subtext_line_2' => $this->t(''),
         'subtext_line_3' => $this->t(''),
         'fb_link' => $this->t(''),
         'twitter_link' => $this->t(''),
         'email_link' => $this->t(''),
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
      '#maxlength' => 128,
      '#size' => 64,
      '#weight' => '0',
  ];
    $form['title'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Title'),
      '#description' => $this->t(''),
      '#default_value' => $this->configuration['title'],
      '#maxlength' => 512,
      '#size' => 64,
      '#weight' => '0',
    ];
    $form['subtext_line_1'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Subtext line 1'),
      '#description' => $this->t(''),
      '#default_value' => $this->configuration['subtext_line_1'],
      '#maxlength' => 256,
      '#size' => 64,
      '#weight' => '0',
    ];
    $form['subtext_line_2'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Subtext line 2'),
      '#description' => $this->t(''),
      '#default_value' => $this->configuration['subtext_line_2'],
      '#maxlength' => 256,
      '#size' => 64,
      '#weight' => '0',
    ];
    $form['subtext_line_3'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Subtext line 3'),
      '#description' => $this->t(''),
      '#default_value' => $this->configuration['subtext_line_3'],
      '#maxlength' => 256,
      '#size' => 64,
      '#weight' => '0',
    ];
    $form['fb_link'] = [
      '#type' => 'textfield',
      '#title' => $this->t('FB link'),
      '#description' => $this->t(''),
      '#default_value' => $this->configuration['fb_link'],
      '#maxlength' => 256,
      '#size' => 64,
      '#weight' => '0',
    ];
    $form['twitter_link'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Twitter link'),
      '#description' => $this->t(''),
      '#default_value' => $this->configuration['twitter_link'],
      '#maxlength' => 256,
      '#size' => 64,
      '#weight' => '0',
    ];
    $form['email_link'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Email link'),
      '#description' => $this->t(''),
      '#default_value' => $this->configuration['email_link'],
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
    $this->configuration['title'] = $form_state->getValue('title');
    $this->configuration['subtext_line_1'] = $form_state->getValue('subtext_line_1');
    $this->configuration['subtext_line_2'] = $form_state->getValue('subtext_line_2');
    $this->configuration['subtext_line_3'] = $form_state->getValue('subtext_line_3');
    $this->configuration['fb_link'] = $form_state->getValue('fb_link');
    $this->configuration['twitter_link'] = $form_state->getValue('twitter_link');
    $this->configuration['email_link'] = $form_state->getValue('email_link');
    $this->configuration['banner_image_relative_path'] = $form_state->getValue('banner_image_relative_path');
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['landing_page_banner_title'] = $this->configuration['title'];
    $build['landing_page_banner_subtext_line_1'] = $this->configuration['subtext_line_1'];
    $build['landing_page_banner_subtext_line_2'] =  $this->configuration['subtext_line_2'];
    $build['landing_page_banner_subtext_line_3'] = $this->configuration['subtext_line_3'];
    $build['landing_page_banner_fb_link'] = $this->configuration['fb_link'];
    $build['landing_page_banner_twitter_link'] = $this->configuration['twitter_link'];
    $build['landing_page_banner_email_link'] = $this->configuration['email_link'];
    $build['landing_page_banner_banner_image_relative_path']= $this->configuration['banner_image_relative_path'];


    $request = \Drupal::request();
      if ($route = $request->attributes->get(\Symfony\Cmf\Component\Routing\RouteObjectInterface::ROUTE_OBJECT)) {
          $page_title = \Drupal::service('title_resolver')->getTitle($request, $route);
      }

      $uri = \Drupal::request()->getRequestUri();
      $current_uri = Url::fromUri('base:' . $uri, ['absolute' => 'true'])->toString();

      $build['default_twitter'] = 'https://twitter.com/home?status=' . $page_title . '%20' . $current_uri;
      $build['default_facebook'] = 'https://www.facebook.com/sharer/sharer.php?u=' . $current_uri;
      $build['default_mail'] = 'mailto:?subject=' . $page_title . '&amp;body=' . $current_uri;

      return $build;
  }

}
