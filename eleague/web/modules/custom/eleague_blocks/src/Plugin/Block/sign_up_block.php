<?php

namespace Drupal\eleague_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'sign_up_block' block.
 *
 * @Block(
 *  id = "sign_up_block",
 *  admin_label = @Translation("Sign Up Block"),
 * )
 */
class sign_up_block extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['sign_up_block']['#markup'] = 'Implement sign_up_block.';

    return $build;
  }

}
