<?php

namespace Drupal\eleague_runsheet;

use Drupal\Core\Entity\Sql\SqlContentEntityStorage;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\Language\LanguageInterface;
use Drupal\eleague_runsheet\Entity\eleague_runsheetInterface;

/**
 * Defines the storage handler class for ELEAGUE runsheet entities.
 *
 * This extends the base storage class, adding required special handling for
 * ELEAGUE runsheet entities.
 *
 * @ingroup eleague_runsheet
 */
class eleague_runsheetStorage extends SqlContentEntityStorage implements eleague_runsheetStorageInterface {

  /**
   * {@inheritdoc}
   */
  public function revisionIds(eleague_runsheetInterface $entity) {
    return $this->database->query(
      'SELECT vid FROM {eleague_runsheet_revision} WHERE id=:id ORDER BY vid',
      [':id' => $entity->id()]
    )->fetchCol();
  }

  /**
   * {@inheritdoc}
   */
  public function userRevisionIds(AccountInterface $account) {
    return $this->database->query(
      'SELECT vid FROM {eleague_runsheet_field_revision} WHERE uid = :uid ORDER BY vid',
      [':uid' => $account->id()]
    )->fetchCol();
  }

  /**
   * {@inheritdoc}
   */
  public function countDefaultLanguageRevisions(eleague_runsheetInterface $entity) {
    return $this->database->query('SELECT COUNT(*) FROM {eleague_runsheet_field_revision} WHERE id = :id AND default_langcode = 1', [':id' => $entity->id()])
      ->fetchField();
  }

  /**
   * {@inheritdoc}
   */
  public function clearRevisionsLanguage(LanguageInterface $language) {
    return $this->database->update('eleague_runsheet_revision')
      ->fields(['langcode' => LanguageInterface::LANGCODE_NOT_SPECIFIED])
      ->condition('langcode', $language->getId())
      ->execute();
  }

}
