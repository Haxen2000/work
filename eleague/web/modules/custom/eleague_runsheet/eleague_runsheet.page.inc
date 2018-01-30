<?php

/**
 * @file
 * Contains eleague_runsheet.page.inc.
 *
 * Page callback for ELEAGUE runsheet entities.
 */

use Drupal\Core\Render\Element;

/**
 * Prepares variables for ELEAGUE runsheet templates.
 *
 * Default template: eleague_runsheet.html.twig.
 *
 * @param array $variables
 *   An associative array containing:
 *   - elements: An associative array containing the user information and any
 *   - attributes: HTML attributes for the containing element.
 */
function template_preprocess_eleague_runsheet(array &$variables) {
  // Fetch eleague_runsheet Entity Object.
  $eleague_runsheet = $variables['elements']['#eleague_runsheet'];

  // Helpful $content variable for templates.
  foreach (Element::children($variables['elements']) as $key) {
    $variables['content'][$key] = $variables['elements'][$key];
  }
}
