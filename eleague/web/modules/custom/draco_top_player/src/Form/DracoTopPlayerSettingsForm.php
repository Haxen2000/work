<?php

namespace Drupal\draco_top_player\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Config\Config;
use Symfony\Component\DependencyInjection\ContainerInterface;

class DracoTopPlayerSettingsForm extends ConfigFormBase {

  /**
   * TOP player config object.
   *
   * @var \Drupal\Core\Config\Config
   */
  protected $config;

  /**
   * {@inheritdoc}
   *
   * @codeCoverageIgnore
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('config.factory')->get('draco_top_player.settings')
    );
  }

  /**
   * DracoTopPlayerSettingsForm constructor.
   *
   * @param \Drupal\Core\Config\Config $config
   *   A config object.
   */
  public function __construct(Config $config) {
    $this->config = $config;
  }


  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'top_player_settings';
  }

  /**
   * {@inheritdoc}
   *
   * @codeCoverageIgnore
   */
  protected function getEditableConfigNames() {
    return ['draco_top_player.settings'];
  }

  /**
   * {@inheritdoc}
   *
   * @param array $form
   *   Form base.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   Current state of given form.
   *
   * @return array
   *   The config form for TOP video player.
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config;
    
    $form['top_assets'] = [
      '#type' => 'details',
      '#title' => t('Location of Assets'),
      '#open' => TRUE,
    ];
    $form['top_assets']['top_js'] = [
      '#type' => 'textfield',
      '#title' => t('TOP Video JavaScript file'),
      '#default_value' => $config->get('top_assets.top_js'),
      '#size' => '80',
      '#description' => t('The location of the TOP JavaScript file, can be external (e.g., "http://turnip.cdn.turner.com/top/core/0.8.1/default/top.sdk-2b.min.js") or relative (e.g., top.min.js).'),
    ];



    $form['actions']['#type'] = 'actions';
    $form['actions']['submit'] = [
      '#type' => 'submit',
      '#value' => 'Save configuration',
      '#button_type' => 'primary',
    ];

    return $form;

  }

  /**
   * {@inheritdoc}
   *
   * @param array $form
   *   The CVP config form.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   Values entered in the CVP config form.
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $values = $form_state->getValues();
    $draco_top_config = $this->config('draco_top_player.settings');

    $draco_top_config
      ->set('top_assets.top_js', $values['top_js']);

    $draco_top_config->save();

    parent::submitForm($form, $form_state);
  }

}
