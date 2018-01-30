<?php

namespace Drupal\draco_top_player\Form;

use Drupal\Core\Database\TransactionNameNonUniqueException;
use Drupal\Core\Entity\EntityForm;
use Drupal\Core\Form\FormStateInterface;

/**
 * Class PlayerConfigForm.
 */
class PlayerConfigForm extends EntityForm {

  /**
   * {@inheritdoc}
   */
  public function form(array $form, FormStateInterface $form_state) {
    $form = parent::form($form, $form_state);

    $player_config = $this->entity;

    $player = $player_config->getPlayerAttributes();
    $media = $player_config->getMediaAttributes();
    $ads = $player_config->getAdsAttributes();
    $sdk = $player_config->getSdkAttributes();
    $form['label'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Label'),
      '#maxlength' => 255,
      '#default_value' => $player_config->label(),
      '#description' => $this->t("Label for the Player config."),
      '#required' => TRUE,
    ];

    $form['id'] = [
      '#type' => 'machine_name',
      '#default_value' => $player_config->id(),
      '#machine_name' => [
        'exists' => '\Drupal\draco_top_player\Entity\PlayerConfig::load',
      ],
      '#disabled' => !$player_config->isNew(),
    ];

    $form['tabs'] = [
      '#type' => 'vertical_tabs'
    ];

    $form['player'] = [
      '#type' => 'details',
      '#title' => $this->t('Player configuration'),
      '#collapsible' => TRUE,
      '#tree' => TRUE,
      '#group' => 'tabs'
    ];
    $form['player']['autoplay'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Turn on autoplay'),
      '#default_value' => $player['autoplay'],
    ];
    $form['player']['force_mobile_media'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Force autoplay on mobile (content will be muted until user interacts)'),
      '#default_value' => $player['force_mobile_media'],
      '#states' => [
        'enabled' => [
          ':input[name="player[autoplay]"]' => ['checked' => TRUE],
        ],
        'disabled' => [
          ':input[name="player[autoplay]"]' => ['checked' => FALSE],
        ],
      ],
    ];
    $form['player']['media_acceleration'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Enable media acceleration'),
      '#default_value' => $player['media_acceleration']
    ];
    $form['player']['native_controls'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Use native browser controls for this player'),
      '#default_value' => $player['native_controls']
    ];
    $form['player']['force_native_captions'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Use native browser captions'),
      '#default_value' => $player['force_native_captions']
    ];
    $form['player']['height'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Player height'),
      '#default_value' => $player['height'],
      '#size' => 10
    ];
    $form['player']['width'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Player width'),
      '#default_value' => $player['width'],
      '#size' => 10
    ];


    $form['media'] = [
      '#type' => 'details',
      '#title' => $this->t('Media configuration'),
      '#group' => 'tabs',
      '#collapsible' => TRUE,
      '#tree' => TRUE,
    ];
    $form['media']['max_bitrate'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Maximum bitrate'),
      '#default_value' => $media['max_bitrate'],
      '#description' => $this->t('The maximum bitrate this player can shift to, regardless of user bandwidth')
    ];
    $form['media']['min_bitrate'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Minimum bitrate'),
      '#default_value' => $media['min_bitrate'],
      '#description' => $this->t('The minimum bitrate this player can shift to, regardless of user bandwidth')
    ];
    $form['media']['start_index'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Start index'),
      '#default_value' => $media['start_index'],
      '#description' => $this->t('Starting media profile')
    ];

    $form['ads'] = [
      '#type' => 'details',
      '#title' => $this->t('Ads configuration'),
      '#group' => 'tabs',
      '#collapsible' => TRUE,
      '#tree' => TRUE,
    ];
    $form['ads']['server_base_url'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Server base URL'),
      '#default_value' => $ads['server_base_url'],
      '#description' => $this->t('Ad server URL')
    ];
    $form['ads']['network_id'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Freewheel network ID'),
      '#default_value' => $ads['network_id'],
      '#description' => $this->t('FreeWheel-assigned ID of the partner making the ad request')
    ];
    $form['ads']['profile'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Ads profile'),
      '#default_value' => $ads['profile'],
      '#description' => $this->t('Identifies the Turner brand making the ad request')
    ];
    $form['ads']['fallback_id'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Fallback id'),
      '#default_value' => $ads['fallback_id'],
      '#description' => $this->t('Tell FreeWheel to fail over to backup ads')
    ];

    $form['sdk'] = [
      '#type' => 'details',
      '#title' => 'SDK config',
      '#group' => 'tabs',
      '#collapsible' => TRUE,
      '#tree' => TRUE,
    ];
    $form['sdk']['conviva_on'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Enable Conviva analytics'),
      '#default_value' => $sdk['conviva_on']
    ];
    $form['sdk']['conviva'] = [
      '#type' => 'fieldset',
      '#title' => $this->t('Conviva settings'),
      '#states' => [
        'enabled' => [
          ':input[name="sdk[conviva_on]"]' => ['checked' => TRUE],
        ],
        'disabled' => [
          ':input[name="sdk[conviva_on]"]' => ['checked' => FALSE],
        ],
      ],
    ];
    $form['sdk']['conviva']['conviva_kind'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Plugin type'),
      '#default_value' => $sdk['conviva']['conviva_kind']
    ];
    $form['sdk']['conviva']['conviva_customer_key'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Conviva customer key'),
      '#default_value' => $sdk['conviva']['conviva_customer_key']
    ];
    $form['sdk']['conviva']['conviva_app_name'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Application name'),
      '#default_value' => $sdk['conviva']['conviva_app_name']
    ];
    $form['sdk']['akamai_on'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Enable Akamai analytics'),
      '#default_value' => $sdk['akamai_on']
    ];
    $form['sdk']['akamai'] = [
      '#type' => 'fieldset',
      '#title' => $this->t('Akamai settings'),
      '#states' => [
        'enabled' => [
          ':input[name="sdk[akamai_on]"]' => ['checked' => TRUE],
        ],
        'disabled' => [
          ':input[name="sdk[akamai_on]"]' => ['checked' => FALSE],
        ],
      ],
    ];
    $form['sdk']['akamai']['akamai_kind'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Plugin type'),
      '#default_value' => $sdk['akamai']['akamai_kind']
    ];
    $form['sdk']['akamai']['akamai_config_path'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Akamai config path'),
      '#default_value' => $sdk['akamai']['akamai_config_path']
    ];


    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function save(array $form, FormStateInterface $form_state) {
    $player_config = $this->entity;
    $status = $player_config->save();

    switch ($status) {
      case SAVED_NEW:
        drupal_set_message($this->t('Created the %label Player config.', [
          '%label' => $player_config->label(),
        ]));
        break;

      default:
        drupal_set_message($this->t('Saved the %label Player config.', [
          '%label' => $player_config->label(),
        ]));
    }
    $form_state->setRedirectUrl($player_config->toUrl('collection'));
  }

}
