<?php

namespace Drupal\eleague_freewheel;
use Drupal\Core\Entity\EntityManager;
use Drupal\Core\Entity\Query\QueryFactory;
use Drupal\Core\Logger\LoggerChannelFactory;
use Drupal\draco_freewheel\Publisher\BviContentPublisher;
use Drupal\eleague_freewheel\Adapter\BviShortFormXmlAdapter;

/**
 * Class BVIPublish.
 */
class BVIPublish {

    //todo: these should really be configs not hardcoded
    private $email = 'info@eleague.com';
    private $network = 'eleague';

  /**
   * Drupal\Core\Entity\EntityManager definition.
   *
   * @var \Drupal\Core\Entity\EntityManager
   */
  protected $entityManager;
  /**
   * Drupal\Core\Entity\Query\QueryFactory definition.
   *
   * @var \Drupal\Core\Entity\Query\QueryFactory
   */
  protected $entityQuery;
  /**
   * Drupal\Core\Logger\LoggerChannelFactory definition.
   *
   * @var \Drupal\Core\Logger\LoggerChannelFactory
   */
  protected $loggerFactory;
  /**
   * Drupal\draco_freewheel\Publisher\BviContentPublisher definition.
   *
   * @var \Drupal\draco_freewheel\Publisher\BviContentPublisher
   */
  protected $dracoFreewheelBviPublisher;
  /**
   * Constructs a new BVIPublish object.
   */
  public function __construct(EntityManager $entity_manager, QueryFactory $entity_query, LoggerChannelFactory $logger_factory, BviContentPublisher $draco_freewheel_bvi_publisher) {
    $this->entityManager = $entity_manager;
    $this->entityQuery = $entity_query;
    $this->loggerFactory = $logger_factory;
    $this->dracoFreewheelBviPublisher = $draco_freewheel_bvi_publisher;
  }

    /**
     * @param int $id
     *   Integer Video ID.
     *
     * @return array
     *   Render array.
     */
  public function PublishBVIContent($id){
      $msg = NULL;
      try {

          $content = $entity = $this->entityManager->getStorage('media')->load($id);
          $content_adapter = new BviShortFormXmlAdapter($content, $this->getNetwork(), $this->getEmail());
          $data = $this->dracoFreewheelBviPublisher->publish([$content_adapter]);
          dump($content_adapter);
      } catch (\Exception $e) {
           $data = new \stdClass();
           $data->status = BviContentPublisher::$ERROR;
           $data->message = $e->getMessage();

      }

    $msg .= $data->status . '  Message: ' . $data->message;
    $return_data = ['#type' => 'markup', '#markup' => $msg];
      $this->loggerFactory->get('default')->debug('Freewheel Publisher Message: ' . $data->message);
    return $return_data;

  }

    /**
     * @return string
     */
    public function getEmail(): string
    {
        return $this->email;
    }

    /**
     * @param string $email
     */
    public function setEmail(string $email)
    {
        $this->email = $email;
    }

    /**
     * @return string
     */
    public function getNetwork(): string
    {
        return $this->network;
    }

    /**
     * @param string $network
     */
    public function setNetwork(string $network)
    {
        $this->network = $network;
    }

}
