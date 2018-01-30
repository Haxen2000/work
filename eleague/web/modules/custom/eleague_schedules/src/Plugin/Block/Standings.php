<?php

namespace Drupal\eleague_schedules\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\field_collection\Entity\FieldCollectionItem;
use Drupal\node\Entity\Node;

/**
 * Provides a 'Standings' block.
 *
 * @Block(
 *  id = "standings",
 *  admin_label = @Translation("Standings"),
 * )
 */
class Standings extends BlockBase {

	public function defaultConfiguration() {
		return [
			'multiplayer_schedule_name' => $this->t(''),
		] + parent::defaultConfiguration();
	}

	public function blockForm($form, FormStateInterface $form_state) {
	    $form['multiplayer_schedule_name'] = [
		    '#type' => 'textfield',
		    '#title' => $this->t('MultiPlayer Schedule Name'),
		    '#description' => $this->t('Enter the Multiplayer Schedule Name'),
		    '#default_value' => $this->configuration['multiplayer_schedule_name'],
		    '#maxlength' => 64,
		    '#size' => 64,
		    '#weight' => '0',
	    ];
	    return $form;
	}

	public function blockSubmit($form, FormStateInterface $form_state) {
		$this->configuration['multiplayer_schedule_name'] = $form_state->getValue('multiplayer_schedule_name');
	}

	/**
	 * {@inheritdoc}
	 */
	public function build() {
	    $build = [];
		$nodes = \Drupal::entityTypeManager()
			->getStorage('node')
			->loadByProperties(['title' => $this->configuration['multiplayer_schedule_name']]);

		//if we found the node
		if ($node = reset($nodes)) {
			$build['json_id'] = $node -> get('field_emps_json_id') -> getValue()[0]['value'];
		}
		else {
			$build['standings']['#markup'] = 'No node';
		}

	    return $build;
	}
}
