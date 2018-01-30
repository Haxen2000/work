<?php

namespace Drupal\eleague_runsheet;

use Drupal\Core\Entity\ContentEntityStorageInterface;
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
interface eleague_runsheetStorageInterface extends ContentEntityStorageInterface {

  /**
   * Gets a list of ELEAGUE runsheet revision IDs for a specific ELEAGUE runsheet.
   *
   * @param \Drupal\eleague_runsheet\Entity\eleague_runsheetInterface $entity
   *   The ELEAGUE runsheet entity.
   *
   * @return int[]
   *   ELEAGUE runsheet revision IDs (in ascending order).
   */
  public function revisionIds(eleague_runsheetInterface $entity);

  /**
   * Gets a list of revision IDs having a given user as ELEAGUE runsheet author.
   *
   * @param \Drupal\Core\Session\AccountInterface $account
   *   The user entity.
   *
   * @return int[]
   *   ELEAGUE runsheet revision IDs (in ascending order).
   */
  public function userRevisionIds(AccountInterface $account);

  /**
   * Counts the number of revisions in the default language.
   *
   * @param \Drupal\eleague_runsheet\Entity\eleague_runsheetInterface $entity
   *   The ELEAGUE runsheet entity.
   *
   * @return int
   *   The number of revisions in the default language.
   */
  public function countDefaultLanguageRevisions(eleague_runsheetInterface $entity);

  /**
   * Unsets the language for all ELEAGUE runsheet with the given language.
   *
   * @param \Drupal\Core\Language\LanguageInterface $language
   *   The language object.
   */
  public function clearRevisionsLanguage(LanguageInterface $language);

}
