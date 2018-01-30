<?php

namespace Drupal\eleague_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'csgo_major_2018_tourney_leader' block.
 *
 * @Block(
 *  id = "csgo_major_2018_tourney_leader",
 *  admin_label = @Translation("CS:GO Major 2018 Tournament Leaders"),
 * )
 */
class csgo_major_2018_tourney_leader extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['csgo_major_2018_tourney_leader']['#markup'] = 'Implement csgo_major_2018_tourney_leader.';

    return $build;
  }

}
