<?php

namespace Drupal\eleague_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'csgo_major_2017_news' block.
 *
 * @Block(
 *  id = "csgo_major_2017_news",
 *  admin_label = @Translation("CS:GO Major 2017 News"),
 * )
 */
class csgo_major_2017_news extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['csgo_major_2017_news']['#markup'] = 'Implement csgo_major_2017_news.';

    return $build;
  }

}
