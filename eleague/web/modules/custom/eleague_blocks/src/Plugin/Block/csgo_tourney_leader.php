<?php

namespace Drupal\eleague_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'csgo_tourney_leader' block.
 *
 * @Block(
 *  id = "csgo_tourney_leader",
 *  admin_label = @Translation("CSGO Tournament Leader Block"),
 * )
 */
class csgo_tourney_leader extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['csgo_tourney_leader']['#markup'] = 'Implement csgo_tourney_leader.';

    return $build;
  }

}
