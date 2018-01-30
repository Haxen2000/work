<?php

namespace Drupal\eleague_runsheet\Entity;

use Drupal\Core\Entity\RevisionLogInterface;
use Drupal\Core\Entity\RevisionableInterface;
use Drupal\Core\Entity\EntityChangedInterface;
use Drupal\user\EntityOwnerInterface;

/**
 * Provides an interface for defining ELEAGUE runsheet entities.
 *
 * @ingroup eleague_runsheet
 */
interface eleague_runsheetInterface extends RevisionableInterface, RevisionLogInterface, EntityChangedInterface, EntityOwnerInterface {

  // Add get/set methods for your configuration properties here.

  /**
   * Gets the ELEAGUE runsheet name.
   *
   * @return string
   *   Name of the ELEAGUE runsheet.
   */
  public function getName();

  /**
   * Sets the ELEAGUE runsheet name.
   *
   * @param string $name
   *   The ELEAGUE runsheet name.
   *
   * @return \Drupal\eleague_runsheet\Entity\eleague_runsheetInterface
   *   The called ELEAGUE runsheet entity.
   */
  public function setName($name);

  /**
   * Gets the ELEAGUE runsheet creation timestamp.
   *
   * @return int
   *   Creation timestamp of the ELEAGUE runsheet.
   */
  public function getCreatedTime();

  /**
   * Sets the ELEAGUE runsheet creation timestamp.
   *
   * @param int $timestamp
   *   The ELEAGUE runsheet creation timestamp.
   *
   * @return \Drupal\eleague_runsheet\Entity\eleague_runsheetInterface
   *   The called ELEAGUE runsheet entity.
   */
  public function setCreatedTime($timestamp);

  /**
   * Returns the ELEAGUE runsheet published status indicator.
   *
   * Unpublished ELEAGUE runsheet are only visible to restricted users.
   *
   * @return bool
   *   TRUE if the ELEAGUE runsheet is published.
   */
  public function isPublished();

  /**
   * Sets the published status of a ELEAGUE runsheet.
   *
   * @param bool $published
   *   TRUE to set this ELEAGUE runsheet to published, FALSE to set it to unpublished.
   *
   * @return \Drupal\eleague_runsheet\Entity\eleague_runsheetInterface
   *   The called ELEAGUE runsheet entity.
   */
  public function setPublished($published);

  /**
   * Gets the ELEAGUE runsheet revision creation timestamp.
   *
   * @return int
   *   The UNIX timestamp of when this revision was created.
   */
  public function getRevisionCreationTime();

  /**
   * Sets the ELEAGUE runsheet revision creation timestamp.
   *
   * @param int $timestamp
   *   The UNIX timestamp of when this revision was created.
   *
   * @return \Drupal\eleague_runsheet\Entity\eleague_runsheetInterface
   *   The called ELEAGUE runsheet entity.
   */
  public function setRevisionCreationTime($timestamp);

  /**
   * Gets the ELEAGUE runsheet revision author.
   *
   * @return \Drupal\user\UserInterface
   *   The user entity for the revision author.
   */
  public function getRevisionUser();

  /**
   * Sets the ELEAGUE runsheet revision author.
   *
   * @param int $uid
   *   The user ID of the revision author.
   *
   * @return \Drupal\eleague_runsheet\Entity\eleague_runsheetInterface
   *   The called ELEAGUE runsheet entity.
   */
  public function setRevisionUserId($uid);

}
