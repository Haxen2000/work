<?php

namespace Drupal\eleague_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'csgo_season2_news' block.
 *
 * @Block(
 *  id = "csgo_season2_news",
 *  admin_label = @Translation("CS:GO Season 2 Custom News Block"),
 * )
 */
class csgo_season2_news extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['csgo_season2_news']['#markup'] = 'Implement csgo_season2_news.';

    return $build;
  }

}
