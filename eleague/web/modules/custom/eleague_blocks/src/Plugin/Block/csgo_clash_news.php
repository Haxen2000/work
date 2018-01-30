<?php

namespace Drupal\eleague_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'csgo_clash_news' block.
 *
 * @Block(
 *  id = "csgo_clash_news",
 *  admin_label = @Translation("CS:GO Clash News"),
 * )
 */
class csgo_clash_news extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['csgo_clash_news']['#markup'] = 'Implement csgo_clash_news.';

    return $build;
  }

}
