<?php

namespace Drupal\eleague_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'AdFuel' block.
 *
 * @Block(
 *  id = "ad_fuel",
 *  admin_label = @Translation("AdFuel"),
 * )
 */
class AdFuel extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['ad_fuel']['#markup'] = 'Implement AdFuel.';

    return $build;
  }

}
