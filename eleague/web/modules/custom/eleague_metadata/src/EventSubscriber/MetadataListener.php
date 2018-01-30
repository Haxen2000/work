<?php

namespace Drupal\eleague_metadata\EventSubscriber;

use Drupal\draco_analytics\Event\DracoAnalyticsEvents;
use Drupal\draco_analytics\Event\TurnerMetadataEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

/**
 * Class MetadataListener.
 */
class MetadataListener implements EventSubscriberInterface {
    /**
     * Alters the turner metadata variable.
     *
     * @param \Drupal\draco_analytics\Event\TurnerMetadataEvent $event
     *   The event to process.
     */
    public function alterMetadata(TurnerMetadataEvent $event) {
        $turner_metadata = $event->getMetadata();
        if (isset($turner_metadata['section0'])) {
          $url = explode('/', $turner_metadata['section0'], 2)[1];
          $turner_metadata['section'] = [
            explode('/', $url)[0],
            (count(explode('/', $url, 2)) > 1 ? explode('/', $url, 2)[1] : '')
          ];
          $event->setMetadata($turner_metadata);
        }
    }
  /**
   * {@inheritdoc}
   */
  static function getSubscribedEvents() {
      $events[DracoAnalyticsEvents::TURNER_METADATA_BUILT][] = ['alterMetadata'];
      return $events;
  }

}
