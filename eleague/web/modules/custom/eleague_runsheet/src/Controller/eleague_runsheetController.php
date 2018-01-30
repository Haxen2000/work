<?php

namespace Drupal\eleague_runsheet\Controller;

use Drupal\Component\Utility\Xss;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\DependencyInjection\ContainerInjectionInterface;
use Drupal\Core\Url;
use Drupal\eleague_runsheet\Entity\eleague_runsheetInterface;

/**
 * Class eleague_runsheetController.
 *
 *  Returns responses for ELEAGUE runsheet routes.
 */
class eleague_runsheetController extends ControllerBase implements ContainerInjectionInterface {

  /**
   * Displays a ELEAGUE runsheet  revision.
   *
   * @param int $eleague_runsheet_revision
   *   The ELEAGUE runsheet  revision ID.
   *
   * @return array
   *   An array suitable for drupal_render().
   */
  public function revisionShow($eleague_runsheet_revision) {
    $eleague_runsheet = $this->entityManager()->getStorage('eleague_runsheet')->loadRevision($eleague_runsheet_revision);
    $view_builder = $this->entityManager()->getViewBuilder('eleague_runsheet');

    return $view_builder->view($eleague_runsheet);
  }

  /**
   * Page title callback for a ELEAGUE runsheet  revision.
   *
   * @param int $eleague_runsheet_revision
   *   The ELEAGUE runsheet  revision ID.
   *
   * @return string
   *   The page title.
   */
  public function revisionPageTitle($eleague_runsheet_revision) {
    $eleague_runsheet = $this->entityManager()->getStorage('eleague_runsheet')->loadRevision($eleague_runsheet_revision);
    return $this->t('Revision of %title from %date', ['%title' => $eleague_runsheet->label(), '%date' => format_date($eleague_runsheet->getRevisionCreationTime())]);
  }

  /**
   * Generates an overview table of older revisions of a ELEAGUE runsheet .
   *
   * @param \Drupal\eleague_runsheet\Entity\eleague_runsheetInterface $eleague_runsheet
   *   A ELEAGUE runsheet  object.
   *
   * @return array
   *   An array as expected by drupal_render().
   */
  public function revisionOverview(eleague_runsheetInterface $eleague_runsheet) {
    $account = $this->currentUser();
    $langcode = $eleague_runsheet->language()->getId();
    $langname = $eleague_runsheet->language()->getName();
    $languages = $eleague_runsheet->getTranslationLanguages();
    $has_translations = (count($languages) > 1);
    $eleague_runsheet_storage = $this->entityManager()->getStorage('eleague_runsheet');

    $build['#title'] = $has_translations ? $this->t('@langname revisions for %title', ['@langname' => $langname, '%title' => $eleague_runsheet->label()]) : $this->t('Revisions for %title', ['%title' => $eleague_runsheet->label()]);
    $header = [$this->t('Revision'), $this->t('Operations')];

    $revert_permission = (($account->hasPermission("revert all eleague runsheet revisions") || $account->hasPermission('administer eleague runsheet entities')));
    $delete_permission = (($account->hasPermission("delete all eleague runsheet revisions") || $account->hasPermission('administer eleague runsheet entities')));

    $rows = [];

    $vids = $eleague_runsheet_storage->revisionIds($eleague_runsheet);

    $latest_revision = TRUE;

    foreach (array_reverse($vids) as $vid) {
      /** @var \Drupal\eleague_runsheet\eleague_runsheetInterface $revision */
      $revision = $eleague_runsheet_storage->loadRevision($vid);
      // Only show revisions that are affected by the language that is being
      // displayed.
      if ($revision->hasTranslation($langcode) && $revision->getTranslation($langcode)->isRevisionTranslationAffected()) {
        $username = [
          '#theme' => 'username',
          '#account' => $revision->getRevisionUser(),
        ];

        // Use revision link to link to revisions that are not active.
        $date = \Drupal::service('date.formatter')->format($revision->getRevisionCreationTime(), 'short');
        if ($vid != $eleague_runsheet->getRevisionId()) {
          $link = $this->l($date, new Url('entity.eleague_runsheet.revision', ['eleague_runsheet' => $eleague_runsheet->id(), 'eleague_runsheet_revision' => $vid]));
        }
        else {
          $link = $eleague_runsheet->link($date);
        }

        $row = [];
        $column = [
          'data' => [
            '#type' => 'inline_template',
            '#template' => '{% trans %}{{ date }} by {{ username }}{% endtrans %}{% if message %}<p class="revision-log">{{ message }}</p>{% endif %}',
            '#context' => [
              'date' => $link,
              'username' => \Drupal::service('renderer')->renderPlain($username),
              'message' => ['#markup' => $revision->getRevisionLogMessage(), '#allowed_tags' => Xss::getHtmlTagList()],
            ],
          ],
        ];
        $row[] = $column;

        if ($latest_revision) {
          $row[] = [
            'data' => [
              '#prefix' => '<em>',
              '#markup' => $this->t('Current revision'),
              '#suffix' => '</em>',
            ],
          ];
          foreach ($row as &$current) {
            $current['class'] = ['revision-current'];
          }
          $latest_revision = FALSE;
        }
        else {
          $links = [];
          if ($revert_permission) {
            $links['revert'] = [
              'title' => $this->t('Revert'),
              'url' => $has_translations ?
              Url::fromRoute('entity.eleague_runsheet.translation_revert', ['eleague_runsheet' => $eleague_runsheet->id(), 'eleague_runsheet_revision' => $vid, 'langcode' => $langcode]) :
              Url::fromRoute('entity.eleague_runsheet.revision_revert', ['eleague_runsheet' => $eleague_runsheet->id(), 'eleague_runsheet_revision' => $vid]),
            ];
          }

          if ($delete_permission) {
            $links['delete'] = [
              'title' => $this->t('Delete'),
              'url' => Url::fromRoute('entity.eleague_runsheet.revision_delete', ['eleague_runsheet' => $eleague_runsheet->id(), 'eleague_runsheet_revision' => $vid]),
            ];
          }

          $row[] = [
            'data' => [
              '#type' => 'operations',
              '#links' => $links,
            ],
          ];
        }

        $rows[] = $row;
      }
    }

    $build['eleague_runsheet_revisions_table'] = [
      '#theme' => 'table',
      '#rows' => $rows,
      '#header' => $header,
    ];

    return $build;
  }

}
