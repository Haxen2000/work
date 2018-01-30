<?php

namespace Drupal\eleague_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\draco_runsheet\RunsheetApi;
/**
 * Provides a 'gallery_runsheet' block.
 *
 * @Block(
 *  id = "gallery_runsheet",
 *  admin_label = @Translation("Gallery Runsheet"),
 * )
 */
class gallery_runsheet extends BlockBase implements ContainerFactoryPluginInterface {

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
      $sheets = $this->dracoRunsheetRunsheetApi->getScheduleCardsForDateTime('homepage_gallery', $date->format('c'));
        //kint($sheets);
      foreach($sheets as $sheet){

         $block_id = $sheet->getTeaser()->get('field_homepage_gallery_block_id')->getValue()[0]['value'];
         $view_name = $sheet->getTeaser()->get('field_homepage_gallery_view_name')->getValue()[0]['value'];
         $build['gallery'][] = views_embed_view($view_name, $block_id);
      }

        return $build['gallery'];
  }

}
