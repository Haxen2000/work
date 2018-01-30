<?php

namespace Drupal\draco_top_player\Element;

use Drupal\Core\Render\Element\RenderElement;

/**
 * Provides a render element for a TOP video player.
 *
 * @RenderElement("draco_top_player")
 */
class DracoTopPlayerElement extends RenderElement {

  /**
   * {@inheritdoc}
   */
  public function getInfo() {
    return[
      '#pre_render' => [[get_called_class(), 'playerSetup']],
    ];
  }

  /**
   * Map params for current player instance to render array.
   *
   * @param array $element
   *   Params for player instance as passed by the calling method.
   *
   * @return array
   *   $element with a render array for the current player.
   */
  public static function playerSetup(array $element) {
    $element['#attached']['drupalSettings']['div_id'] = $element['#player_div'];
    $element['#attached']['drupalSettings']['media_id'] = $element['#media_id'];
    $element['#attached']['drupalSettings']['player_config'] = $element['#player_config'];
    $element["#attached"]['library'] = $element['#library'];

    return $element;
  }

}

