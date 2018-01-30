<?php

namespace Drupal\eleague_runsheet;

use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Entity\EntityListBuilder;
use Drupal\Core\Link;

/**
 * Defines a class to build a listing of ELEAGUE runsheet entities.
 *
 * @ingroup eleague_runsheet
 */
class eleague_runsheetListBuilder extends EntityListBuilder {


  /**
   * {@inheritdoc}
   */
  public function buildHeader() {
    $header['id'] = $this->t('ELEAGUE runsheet ID');
    $header['name'] = $this->t('Name');
    return $header + parent::buildHeader();
  }

  /**
   * {@inheritdoc}
   */
  public function buildRow(EntityInterface $entity) {
    /* @var $entity \Drupal\eleague_runsheet\Entity\eleague_runsheet */
    $row['id'] = $entity->id();
    $row['name'] = Link::createFromRoute(
      $entity->label(),
      'entity.eleague_runsheet.edit_form',
      ['eleague_runsheet' => $entity->id()]
    );
    return $row + parent::buildRow($entity);
  }

}
