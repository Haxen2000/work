<?php

namespace Drupal\Tests\draco_top_player\Kernel;

use Drupal\draco_top_player\Entity\PlayerConfig;
use Drupal\KernelTests\KernelTestBase;

/**
 * Class PlayerConfigTest
 *
 * Tests the PlayerConfig entity.
 *
 * @package Drupal\Tests\draco_top_player\Unit
 *
 * @group draco_top_player
 *
 * @coversDefaultClass \Drupal\draco_top_player\Entity\PlayerConfig
 */
class PlayerConfigTest extends KernelTestBase {

  /**
   * {@inheritdoc}
   */
  public static $modules = [
    'draco_top_player',
  ];

  /**
   * {@inheritdoc}
   */
  public function setUp() {
    parent::setUp();
    $this->installEntitySchema('player_config');
  }

  /**
   * @covers ::getPlayerAttributes
   */
  public function testGetPlayerAttributes() {
    $player_config = new PlayerConfig([
      'id' => 'test',
      'label' => 'Test',
      'player' => [
        'autoplay' => TRUE,
        'autoplay_options' => [
          'force_mobile_media' => FALSE,
        ],
        'media_acceleration' => FALSE,
        'native_controls' => TRUE,
        'force_native_captions' => FALSE
      ],
      'ads' => [],
      'media' => [],
      'sdk' => []
    ], 'player_config');
    $player_attrs = $player_config->getPlayerAttributes();
    //var_dump($player_attrs);
    $this->assertTrue($player_attrs['autoplay']);
    $this->assertFalse($player_attrs['autoplay_options']['force_mobile_media']);
    $this->assertFalse($player_attrs['media_acceleration']);
    $this->assertTrue($player_attrs['native_controls']);
    $this->assertFalse($player_attrs['force_native_captions']);
  }

  /**
   * @covers ::getMediaAttributes
   */
  public function testGetMediaAttributes() {
    $player_config = new PlayerConfig([
      'id' => 'test',
      'label' => 'Test',
      'player' => [],
      'media' => [
        'max_bitrate' => 4000,
        'min_bitrate' => 1000,
        'start_index' => 1
      ],
      'ads' => [],
      'sdk' => []
    ], 'player_config');
    $media_attrs = $player_config->getMediaAttributes();
    $this->assertEquals($media_attrs['max_bitrate'], 4000);
    $this->assertEquals($media_attrs['min_bitrate'], 1000);
    $this->assertEquals($media_attrs['start_index'], 1);
  }

  /**
   * @covers ::getAdsAttributes
   */
  public function testGetAdsAttributes() {
    $player_config = new PlayerConfig([
      'id' => 'test',
      'label' => 'Test',
      'player' => [],
      'media' => [],
      'ads' => [
        'server_base_url' => 'server_base',
        'network_id' => 'no_network',
        'profile' => 'three quarters',
        'fallback_id' => 'fallin'
      ],
      'sdk' => []
    ], 'player_config');
    $ads_attrs = $player_config->getAdsAttributes();
    $this->assertEquals($ads_attrs['server_base_url'], 'server_base');
    $this->assertEquals($ads_attrs['network_id'], 'no_network');
    $this->assertEquals($ads_attrs['profile'], 'three quarters');
    $this->assertEquals($ads_attrs['fallback_id'], 'fallin');
  }

  /**
   * @covers ::getSdkAttributes
   */
  public function testGetSdkAttributes() {
    $player_config = new PlayerConfig([
      'id' => 'test',
      'label' => 'Test',
      'player' => [],
      'media' => [],
      'ads' => [],
      'sdk' => [
        'conviva' => [
          'conviva_on' => 'true',
          'conviva_customer_key' => 'zyxwvut',
          'conviva_app_name' => 'gelado'
        ],
        'akamai' => [
          'akamai_on' => 'true',
          'akamai_kind' => 'rectangular',
          'akamai_config_path' => 'lewis clark trail'
        ]
      ]
    ], 'player_config');
    $sdk_attrs = $player_config->getSdkAttributes();
    $this->assertTrue($sdk_attrs['conviva']['conviva_on']);
    $this->assertEquals($sdk_attrs['conviva']['conviva_customer_key'], 'zyxwvut');
    $this->assertEquals($sdk_attrs['conviva']['conviva_app_name'], 'gelado');
    $this->assertTrue($sdk_attrs['akamai']['akamai_on']);
    $this->assertEquals($sdk_attrs['akamai']['akamai_kind'], 'rectangular');
    $this->assertEquals($sdk_attrs['akamai']['akamai_config_path'], 'lewis clark trail');
  }

}