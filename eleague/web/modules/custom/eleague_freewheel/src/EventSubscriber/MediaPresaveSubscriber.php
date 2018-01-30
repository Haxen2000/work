<?php

namespace Drupal\eleague_freewheel\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\EventDispatcher\Event;

/**
 * Class MediaPresaveSubscriber.
 */
class MediaPresaveSubscriber implements EventSubscriberInterface {


  /**
   * Constructs a new MediaPresaveSubscriber object.
   */
  public function __construct() {

  }

  /**
   * {@inheritdoc}
   */
  static function getSubscribedEvents() {

    return $events;
  }


}
