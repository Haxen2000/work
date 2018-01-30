<?php

namespace Drupal\eleague_runsheet\Entity;

use Drupal\Core\Entity\EntityStorageInterface;
use Drupal\Core\Field\BaseFieldDefinition;
use Drupal\Core\Entity\RevisionableContentEntityBase;
use Drupal\Core\Entity\EntityChangedTrait;
use Drupal\Core\Entity\EntityTypeInterface;
use Drupal\user\UserInterface;

/**
 * Defines the ELEAGUE runsheet entity.
 *
 * @ingroup eleague_runsheet
 *
 * @ContentEntityType(
 *   id = "eleague_runsheet",
 *   label = @Translation("ELEAGUE runsheet"),
 *   bundle_label = @Translation("ELEAGUE runsheet type"),
 *   handlers = {
 *     "storage" = "Drupal\eleague_runsheet\eleague_runsheetStorage",
 *     "view_builder" = "Drupal\Core\Entity\EntityViewBuilder",
 *     "list_builder" = "Drupal\eleague_runsheet\eleague_runsheetListBuilder",
 *     "views_data" = "Drupal\eleague_runsheet\Entity\eleague_runsheetViewsData",
 *     "translation" = "Drupal\eleague_runsheet\eleague_runsheetTranslationHandler",
 *
 *     "form" = {
 *       "default" = "Drupal\eleague_runsheet\Form\eleague_runsheetForm",
 *       "add" = "Drupal\eleague_runsheet\Form\eleague_runsheetForm",
 *       "edit" = "Drupal\eleague_runsheet\Form\eleague_runsheetForm",
 *       "delete" = "Drupal\eleague_runsheet\Form\eleague_runsheetDeleteForm",
 *     },
 *     "access" = "Drupal\eleague_runsheet\eleague_runsheetAccessControlHandler",
 *     "route_provider" = {
 *       "html" = "Drupal\eleague_runsheet\eleague_runsheetHtmlRouteProvider",
 *     },
 *   },
 *   base_table = "eleague_runsheet",
 *   data_table = "eleague_runsheet_field_data",
 *   revision_table = "eleague_runsheet_revision",
 *   revision_data_table = "eleague_runsheet_field_revision",
 *   translatable = TRUE,
 *   admin_permission = "administer eleague runsheet entities",
 *   entity_keys = {
 *     "id" = "id",
 *     "revision" = "vid",
 *     "bundle" = "type",
 *     "label" = "name",
 *     "uuid" = "uuid",
 *     "uid" = "user_id",
 *     "langcode" = "langcode",
 *     "status" = "status",
 *   },
 *   links = {
 *     "canonical" = "/admin/structure/eleague_runsheet/{eleague_runsheet}",
 *     "add-page" = "/admin/structure/eleague_runsheet/add",
 *     "add-form" = "/admin/structure/eleague_runsheet/add/{eleague_runsheet_type}",
 *     "edit-form" = "/admin/structure/eleague_runsheet/{eleague_runsheet}/edit",
 *     "delete-form" = "/admin/structure/eleague_runsheet/{eleague_runsheet}/delete",
 *     "version-history" = "/admin/structure/eleague_runsheet/{eleague_runsheet}/revisions",
 *     "revision" = "/admin/structure/eleague_runsheet/{eleague_runsheet}/revisions/{eleague_runsheet_revision}/view",
 *     "revision_revert" = "/admin/structure/eleague_runsheet/{eleague_runsheet}/revisions/{eleague_runsheet_revision}/revert",
 *     "revision_delete" = "/admin/structure/eleague_runsheet/{eleague_runsheet}/revisions/{eleague_runsheet_revision}/delete",
 *     "translation_revert" = "/admin/structure/eleague_runsheet/{eleague_runsheet}/revisions/{eleague_runsheet_revision}/revert/{langcode}",
 *     "collection" = "/admin/structure/eleague_runsheet",
 *   },
 *   bundle_entity_type = "eleague_runsheet_type",
 *   field_ui_base_route = "entity.eleague_runsheet_type.edit_form"
 * )
 */
class eleague_runsheet extends RevisionableContentEntityBase implements eleague_runsheetInterface {

  use EntityChangedTrait;

  /**
   * {@inheritdoc}
   */
  public static function preCreate(EntityStorageInterface $storage_controller, array &$values) {
    parent::preCreate($storage_controller, $values);
    $values += [
      'user_id' => \Drupal::currentUser()->id(),
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function preSave(EntityStorageInterface $storage) {
    parent::preSave($storage);

    foreach (array_keys($this->getTranslationLanguages()) as $langcode) {
      $translation = $this->getTranslation($langcode);

      // If no owner has been set explicitly, make the anonymous user the owner.
      if (!$translation->getOwner()) {
        $translation->setOwnerId(0);
      }
    }

    // If no revision author has been set explicitly, make the eleague_runsheet owner the
    // revision author.
    if (!$this->getRevisionUser()) {
      $this->setRevisionUserId($this->getOwnerId());
    }
  }

  /**
   * {@inheritdoc}
   */
  public function getName() {
    return $this->get('name')->value;
  }

  /**
   * {@inheritdoc}
   */
  public function setName($name) {
    $this->set('name', $name);
    return $this;
  }

  /**
   * {@inheritdoc}
   */
  public function getCreatedTime() {
    return $this->get('created')->value;
  }

  /**
   * {@inheritdoc}
   */
  public function setCreatedTime($timestamp) {
    $this->set('created', $timestamp);
    return $this;
  }

  /**
   * {@inheritdoc}
   */
  public function getOwner() {
    return $this->get('user_id')->entity;
  }

  /**
   * {@inheritdoc}
   */
  public function getOwnerId() {
    return $this->get('user_id')->target_id;
  }

  /**
   * {@inheritdoc}
   */
  public function setOwnerId($uid) {
    $this->set('user_id', $uid);
    return $this;
  }

  /**
   * {@inheritdoc}
   */
  public function setOwner(UserInterface $account) {
    $this->set('user_id', $account->id());
    return $this;
  }

  /**
   * {@inheritdoc}
   */
  public function isPublished() {
    return (bool) $this->getEntityKey('status');
  }

  /**
   * {@inheritdoc}
   */
  public function setPublished($published) {
    $this->set('status', $published ? TRUE : FALSE);
    return $this;
  }

  /**
   * {@inheritdoc}
   */
  public static function baseFieldDefinitions(EntityTypeInterface $entity_type) {
    $fields = parent::baseFieldDefinitions($entity_type);

    $fields['user_id'] = BaseFieldDefinition::create('entity_reference')
      ->setLabel(t('Authored by'))
      ->setDescription(t('The user ID of author of the ELEAGUE runsheet entity.'))
      ->setRevisionable(TRUE)
      ->setSetting('target_type', 'user')
      ->setSetting('handler', 'default')
      ->setTranslatable(TRUE)
      ->setDisplayOptions('view', [
        'label' => 'hidden',
        'type' => 'author',
        'weight' => 0,
      ])
      ->setDisplayOptions('form', [
        'type' => 'entity_reference_autocomplete',
        'weight' => 5,
        'settings' => [
          'match_operator' => 'CONTAINS',
          'size' => '60',
          'autocomplete_type' => 'tags',
          'placeholder' => '',
        ],
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    $fields['name'] = BaseFieldDefinition::create('string')
      ->setLabel(t('Name'))
      ->setDescription(t('The name of the ELEAGUE runsheet entity.'))
      ->setRevisionable(TRUE)
      ->setSettings([
        'max_length' => 50,
        'text_processing' => 0,
      ])
      ->setDefaultValue('')
      ->setDisplayOptions('view', [
        'label' => 'above',
        'type' => 'string',
        'weight' => -4,
      ])
      ->setDisplayOptions('form', [
        'type' => 'string_textfield',
        'weight' => -4,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    $fields['status'] = BaseFieldDefinition::create('boolean')
      ->setLabel(t('Publishing status'))
      ->setDescription(t('A boolean indicating whether the ELEAGUE runsheet is published.'))
      ->setRevisionable(TRUE)
      ->setDefaultValue(TRUE);

    $fields['created'] = BaseFieldDefinition::create('created')
      ->setLabel(t('Created'))
      ->setDescription(t('The time that the entity was created.'));

    $fields['changed'] = BaseFieldDefinition::create('changed')
      ->setLabel(t('Changed'))
      ->setDescription(t('The time that the entity was last edited.'));

    $fields['revision_translation_affected'] = BaseFieldDefinition::create('boolean')
      ->setLabel(t('Revision translation affected'))
      ->setDescription(t('Indicates if the last edit of a translation belongs to current revision.'))
      ->setReadOnly(TRUE)
      ->setRevisionable(TRUE)
      ->setTranslatable(TRUE);

    return $fields;
  }

}
