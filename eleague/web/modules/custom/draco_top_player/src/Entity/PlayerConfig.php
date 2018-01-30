<?php

namespace Drupal\draco_top_player\Entity;

use Drupal\Core\Config\Entity\ConfigEntityBase;

/**
 * Defines the Player config entity.
 *
 * @ConfigEntityType(
 *   id = "player_config",
 *   label = @Translation("Player config"),
 *   handlers = {
 *     "view_builder" = "Drupal\Core\Entity\EntityViewBuilder",
 *     "list_builder" = "Drupal\draco_top_player\PlayerConfigListBuilder",
 *     "form" = {
 *       "add" = "Drupal\draco_top_player\Form\PlayerConfigForm",
 *       "edit" = "Drupal\draco_top_player\Form\PlayerConfigForm",
 *       "delete" = "Drupal\draco_top_player\Form\PlayerConfigDeleteForm"
 *     },
 *     "route_provider" = {
 *       "html" = "Drupal\draco_top_player\PlayerConfigHtmlRouteProvider",
 *     },
 *   },
 *   config_prefix = "player_config",
 *   admin_permission = "administer site configuration",
 *   entity_keys = {
 *     "id" = "id",
 *     "label" = "label",
 *     "uuid" = "uuid"
 *   },
 *   links = {
 *     "canonical" = "/admin/structure/player_config/{player_config}",
 *     "add-form" = "/admin/structure/player_config/add",
 *     "edit-form" = "/admin/structure/player_config/{player_config}/edit",
 *     "delete-form" = "/admin/structure/player_config/{player_config}/delete",
 *     "collection" = "/admin/structure/player_config"
 *   }
 * )
 */
class PlayerConfig extends ConfigEntityBase implements PlayerConfigInterface {

  /**
   * The Player config ID.
   *
   * @var string
   */
  protected $id;

  /**
   * The Player config label.
   *
   * @var string
   */
  protected $label;

  /**
   * Gets all fields in the schema player mapping.
   *
   * @return array|null
   */
  public function getPlayerAttributes() {
    return $this->get('player');
  }

  /**
   * Gets all fields in the schema media mapping.
   *
   * @return array|null
   */
  public function getMediaAttributes() {
    return $this->get('media');
  }

  /**
   * Gets all fields in the schema ads mapping.
   *
   * @return array|null
   */
  public function getAdsAttributes() {
    return $this->get('ads');
  }

  /**
   * Gets all fields in the schema sdk mapping.
   *
   * @return array|null
   */
  public function getSdkAttributes() {
    return $this->get('sdk');
  }

  /**
   * Gets all settings.
   *
   * @return array
   */
  public function getAllConfig() {
    $config = [];
    $config['player'] = $this->getPlayerAttributes();
    $config['media'] = $this->getMediaAttributes();
    $config['ads'] = $this->getAdsAttributes();
    $config['sdk'] = $this->getSdkAttributes();
    return $config;
  }
}
