<?php

namespace Drupal\eleague_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'csgo_season1_tourney_leader' block.
 *
 * @Block(
 *  id = "csgo_season1_tourney_leader",
 *  admin_label = @Translation("CS:GO Season 1 Tournament Leader"),
 * )
 */
class csgo_season1_tourney_leader extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['csgo_season1_tourney_leader']['#markup'] = 'Implement csgo_season1_tourney_leader.';

    return $build;
  }

}
