<?php

namespace Drupal\eleague_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'cso_premier_news' block.
 *
 * @Block(
 *  id = "cso_premier_news",
 *  admin_label = @Translation("CSGO Premier News Custom Block"),
 * )
 */
class cso_premier_news extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['cso_premier_news']['#markup'] = 'Implement cso_premier_news.';

    return $build;
  }

}
