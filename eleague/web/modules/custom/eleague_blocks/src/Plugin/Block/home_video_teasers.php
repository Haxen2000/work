<?php

namespace Drupal\eleague_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'home_video_teasers' block.
 *
 * @Block(
 *  id = "home_video_teasers",
 *  admin_label = @Translation("Home Video Teasers"),
 * )
 */
class home_video_teasers extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['home_video_teasers']['#markup'] = 'Implement home_video_teasers.';

    return $build;
  }

}
