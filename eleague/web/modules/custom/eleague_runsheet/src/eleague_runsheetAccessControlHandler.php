<?php

namespace Drupal\eleague_runsheet;

use Drupal\Core\Entity\EntityAccessControlHandler;
use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\Access\AccessResult;

/**
 * Access controller for the ELEAGUE runsheet entity.
 *
 * @see \Drupal\eleague_runsheet\Entity\eleague_runsheet.
 */
class eleague_runsheetAccessControlHandler extends EntityAccessControlHandler {

  /**
   * {@inheritdoc}
   */
  protected function checkAccess(EntityInterface $entity, $operation, AccountInterface $account) {
    /** @var \Drupal\eleague_runsheet\Entity\eleague_runsheetInterface $entity */
    switch ($operation) {
      case 'view':
        if (!$entity->isPublished()) {
          return AccessResult::allowedIfHasPermission($account, 'view unpublished eleague runsheet entities');
        }
        return AccessResult::allowedIfHasPermission($account, 'view published eleague runsheet entities');

      case 'update':
        return AccessResult::allowedIfHasPermission($account, 'edit eleague runsheet entities');

      case 'delete':
        return AccessResult::allowedIfHasPermission($account, 'delete eleague runsheet entities');
    }

    // Unknown operation, no opinion.
    return AccessResult::neutral();
  }

  /**
   * {@inheritdoc}
   */
  protected function checkCreateAccess(AccountInterface $account, array $context, $entity_bundle = NULL) {
    return AccessResult::allowedIfHasPermission($account, 'add eleague runsheet entities');
  }

}
