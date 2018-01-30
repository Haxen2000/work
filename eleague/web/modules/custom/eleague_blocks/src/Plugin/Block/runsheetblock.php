<?php

namespace Drupal\eleague_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\draco_runsheet\RunsheetApi;

/**
 * Provides a 'runsheetblock' block.
 *
 * @Block(
 *  id = "runsheetblock",
 *  admin_label = @Translation("Runsheetblock"),
 * )
 */
class runsheetblock extends BlockBase implements ContainerFactoryPluginInterface {

  /**
   * Drupal\draco_runsheet\RunsheetApi definition.
   *
   * @var \Drupal\draco_runsheet\RunsheetApi
   */
  protected $dracoRunsheetRunsheetApi;
  /**
   * Constructs a new runsheetblock object.
   *
   * @param array $configuration
   *   A configuration array containing information about the plugin instance.
   * @param string $plugin_id
   *   The plugin_id for the plugin instance.
   * @param string $plugin_definition
   *   The plugin implementation definition.
   */
  public function __construct(
        array $configuration,
        $plugin_id,
        $plugin_definition,
        RunsheetApi $draco_runsheet_runsheet_api
  ) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->dracoRunsheetRunsheetApi = $draco_runsheet_runsheet_api;
  }
  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('draco_runsheet.runsheet_api')
    );
  }
  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
      $date = new \DateTime();
      $formatted_date = $date->format('c');
      $sheets = $this->dracoRunsheetRunsheetApi->getScheduleCardsForDateTime('homepage_live_ribbon', $date->format('c'));

      foreach($sheets as $sheet){
          //kint($sheet->getTeaser()->get('field_html')->getValue());
          $build['html'][] = $sheet->getTeaser()->get('field_live_now_html')->getValue()[0]['value'];
      }

      return $build['html'];
  }

}
