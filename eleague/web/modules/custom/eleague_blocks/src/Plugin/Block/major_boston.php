<?php

namespace Drupal\eleague_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'major_boston' block.
 *
 * @Block(
 *  id = "major_boston",
 *  admin_label = @Translation("Major Boston Cusom Block"),
 * )
 */
class major_boston extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['major_boston']['#markup'] = 'Implement major_boston.';

    return $build;
  }

}
