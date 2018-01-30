<?php

namespace Drupal\eleague_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'csgo_season2_tourney_leader' block.
 *
 * @Block(
 *  id = "csgo_season2_tourney_leader",
 *  admin_label = @Translation("CS:GO Season 2 Tournament Leader"),
 * )
 */
class csgo_season2_tourney_leader extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['csgo_season2_tourney_leader']['#markup'] = 'Implement csgo_season2_tourney_leader.';

    return $build;
  }

}
