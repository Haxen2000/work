<?php

namespace Drupal\eleague_runsheet\Form;

use Drupal\Core\Database\Connection;
use Drupal\Core\Entity\EntityStorageInterface;
use Drupal\Core\Form\ConfirmFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Url;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides a form for deleting a ELEAGUE runsheet revision.
 *
 * @ingroup eleague_runsheet
 */
class eleague_runsheetRevisionDeleteForm extends ConfirmFormBase {


  /**
   * The ELEAGUE runsheet revision.
   *
   * @var \Drupal\eleague_runsheet\Entity\eleague_runsheetInterface
   */
  protected $revision;

  /**
   * The ELEAGUE runsheet storage.
   *
   * @var \Drupal\Core\Entity\EntityStorageInterface
   */
  protected $eleague_runsheetStorage;

  /**
   * The database connection.
   *
   * @var \Drupal\Core\Database\Connection
   */
  protected $connection;

  /**
   * Constructs a new eleague_runsheetRevisionDeleteForm.
   *
   * @param \Drupal\Core\Entity\EntityStorageInterface $entity_storage
   *   The entity storage.
   * @param \Drupal\Core\Database\Connection $connection
   *   The database connection.
   */
  public function __construct(EntityStorageInterface $entity_storage, Connection $connection) {
    $this->eleague_runsheetStorage = $entity_storage;
    $this->connection = $connection;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    $entity_manager = $container->get('entity.manager');
    return new static(
      $entity_manager->getStorage('eleague_runsheet'),
      $container->get('database')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'eleague_runsheet_revision_delete_confirm';
  }

  /**
   * {@inheritdoc}
   */
  public function getQuestion() {
    return t('Are you sure you want to delete the revision from %revision-date?', ['%revision-date' => format_date($this->revision->getRevisionCreationTime())]);
  }

  /**
   * {@inheritdoc}
   */
  public function getCancelUrl() {
    return new Url('entity.eleague_runsheet.version_history', ['eleague_runsheet' => $this->revision->id()]);
  }

  /**
   * {@inheritdoc}
   */
  public function getConfirmText() {
    return t('Delete');
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state, $eleague_runsheet_revision = NULL) {
    $this->revision = $this->eleague_runsheetStorage->loadRevision($eleague_runsheet_revision);
    $form = parent::buildForm($form, $form_state);

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $this->eleague_runsheetStorage->deleteRevision($this->revision->getRevisionId());

    $this->logger('content')->notice('ELEAGUE runsheet: deleted %title revision %revision.', ['%title' => $this->revision->label(), '%revision' => $this->revision->getRevisionId()]);
    drupal_set_message(t('Revision from %revision-date of ELEAGUE runsheet %title has been deleted.', ['%revision-date' => format_date($this->revision->getRevisionCreationTime()), '%title' => $this->revision->label()]));
    $form_state->setRedirect(
      'entity.eleague_runsheet.canonical',
       ['eleague_runsheet' => $this->revision->id()]
    );
    if ($this->connection->query('SELECT COUNT(DISTINCT vid) FROM {eleague_runsheet_field_revision} WHERE id = :id', [':id' => $this->revision->id()])->fetchField() > 1) {
      $form_state->setRedirect(
        'entity.eleague_runsheet.version_history',
         ['eleague_runsheet' => $this->revision->id()]
      );
    }
  }

}
