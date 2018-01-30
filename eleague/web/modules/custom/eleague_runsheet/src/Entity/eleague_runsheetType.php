<?php

namespace Drupal\eleague_runsheet\Entity;

use Drupal\Core\Config\Entity\ConfigEntityBundleBase;

/**
 * Defines the ELEAGUE runsheet type entity.
 *
 * @ConfigEntityType(
 *   id = "eleague_runsheet_type",
 *   label = @Translation("ELEAGUE runsheet type"),
 *   handlers = {
 *     "view_builder" = "Drupal\Core\Entity\EntityViewBuilder",
 *     "list_builder" = "Drupal\eleague_runsheet\eleague_runsheetTypeListBuilder",
 *     "form" = {
 *       "add" = "Drupal\eleague_runsheet\Form\eleague_runsheetTypeForm",
 *       "edit" = "Drupal\eleague_runsheet\Form\eleague_runsheetTypeForm",
 *       "delete" = "Drupal\eleague_runsheet\Form\eleague_runsheetTypeDeleteForm"
 *     },
 *     "route_provider" = {
 *       "html" = "Drupal\eleague_runsheet\eleague_runsheetTypeHtmlRouteProvider",
 *     },
 *   },
 *   config_prefix = "eleague_runsheet_type",
 *   admin_permission = "administer site configuration",
 *   bundle_of = "eleague_runsheet",
 *   entity_keys = {
 *     "id" = "id",
 *     "label" = "label",
 *     "uuid" = "uuid"
 *   },
 *   links = {
 *     "canonical" = "/admin/structure/eleague_runsheet_type/{eleague_runsheet_type}",
 *     "add-form" = "/admin/structure/eleague_runsheet_type/add",
 *     "edit-form" = "/admin/structure/eleague_runsheet_type/{eleague_runsheet_type}/edit",
 *     "delete-form" = "/admin/structure/eleague_runsheet_type/{eleague_runsheet_type}/delete",
 *     "collection" = "/admin/structure/eleague_runsheet_type"
 *   }
 * )
 */
class eleague_runsheetType extends ConfigEntityBundleBase implements eleague_runsheetTypeInterface {

  /**
   * The ELEAGUE runsheet type ID.
   *
   * @var string
   */
  protected $id;

  /**
   * The ELEAGUE runsheet type label.
   *
   * @var string
   */
  protected $label;

}
