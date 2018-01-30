<?php

namespace Drupal\eleague_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'csgo_season2_bracket' block.
 *
 * @Block(
 *  id = "csgo_season2_bracket",
 *  admin_label = @Translation("CS:GO Seaseon 2 Bracket"),
 * )
 */
class csgo_season2_bracket extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['csgo_season2_bracket']['#markup'] = 'Implement csgo_season2_bracket.';

    return $build;
  }

}
