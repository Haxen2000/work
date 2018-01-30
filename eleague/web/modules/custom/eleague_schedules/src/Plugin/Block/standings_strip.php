<?php

namespace Drupal\eleague_schedules\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\field_collection\Entity\FieldCollectionItem;
use Drupal\node\Entity\Node;

/**
 * Provides a 'standings_strip' block.
 *
 * @Block(
 *  id = "standings_strip",
 *  admin_label = @Translation("Standings Strip"),
 * )
 */
class standings_strip extends BlockBase {


	public function defaultConfiguration() {
		return [
			'standings_title' => $this->t(''),
		] + parent::defaultConfiguration();
	}

	public function blockForm($form, FormStateInterface $form_state) {
		$form['standings_title'] = [
			'#type' => 'textfield',
			'#title' => $this->t('MultiPlayer Schedule Name'),
			'#description' => $this->t('Enter the Multiplayer Schedule Name (note: this field is case sensitive)'),
			'#default_value' => $this->configuration['standings_title'],
			'#maxlength' => 64,
			'#size' => 64,
			'#weight' => '0',
		];

		return $form;
	}

	public function blockSubmit($form, FormStateInterface $form_state) {
		$this->configuration['standings_title'] = $form_state->getValue('standings_title');
	}

	/**
	* {@inheritdoc}
	*/
	public function build() {
		$build = [];

		//load the node by the title
		$nodes = \Drupal::entityTypeManager()
			->getStorage('node')
			->loadByProperties(['title' => $this->configuration['standings_title']]);

		//if we found the node
		if ($node = reset($nodes)) {
			//loop through the weeks in the schedule
			foreach ($node->field_standings_team->getValue() as $key => $item) {
				$standings_team = FieldCollectionItem::load($item['value']);
				$team = Node::load($standings_team->field_elmp_team->getValue()[0]['target_id']);
				$build['standings_team'][$key]['team_name'] = $team->getTitle();
				$build['standings_team'][$key]['logo'] = file_create_url(\Drupal\file\Entity\File::load($team->field_logo_small->target_id)->getFileUri());
				//$build['standings_team'][$key]['logo'] = \Drupal\file\Entity\File::load($team->field_logo_small->target_id)->getFileUri();
				$build['standings_team'][$key]['record'] = $standings_team->field_record->value;
			}
		}
		else {
			$build['standings_strip']['#markup'] = 'Implement standings_strip.';
		}
		return $build;
	}
}
