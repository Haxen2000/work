<?php

namespace Drupal\eleague_freewheel\Adapter;

use Drupal\draco_freewheel\XmlGenerator\BviShortFormXmlInterface;

/**
 * Class BviShortFormXmlAdapter.
 *
 * Custom ELEAGUE adapter to implement a adapter class that implements the
 * BviContentXmlInterface to setup data required by FreeWheel's BVI to publish
 * clip BVI, or short form XML data.
 *
 * @package Drupal\draco_freewheel_demo\Adapter
 */
class BviShortFormXmlAdapter implements BviShortFormXmlInterface {

    private $titleId;
    private $network;
    private $titles;
    private $contactEmail;
    private $videoId;
    private $duration;
    private $descriptions;
    private $replaceAirDates;

    /**
     * BviShortFormXmlAdapter constructor.
     *
     * @param mixed $video_data
     *    Video data.
     * @param string $network
     *    Network name.
     * @param string $email
     *    Email address.
     */
    public function __construct($video_data, $network, $email) {
        $this->populateVideoData($video_data, $network, $email);
    }

    /**
     * Populate fields from passed video entity and other sources.
     *
     * @param mixed $video_data
     *    Video data.
     * @param string $network
     *    Network name.
     * @param string $email
     *    Email address.
     */
    protected function populateVideoData($video_data, $network, $email) {

        // Set required network name
        $this->network = $network;

        //the draco freewheel module will turn this videoId into eleague-clip-<media_id> (eg: eleague-clip-2)
        $this->titleId = 'clip-' . $video_data->mid->value;
        $this->setVideoId($this->titleId);


        // Set required attribute 'contact_email'.
        $this->setContactEmail($email);

        // Set data for fwDecriptions node.
        $description = array();
        $description['descriptionType'] = 'Episode';
        $description['description'] = $video_data->field_description->value;

        $descriptions = array();
        $descriptions[] = ['descriptionItem' => $description];

        $this->setDescriptions($descriptions);

        // Set data for fwTitles node.
        // TODO need to figure out how to set titleType.


        $titles = array();
        $title_item_1 = array();
        $title_item_1['titleType'] = 'Group';
        $title_item_1['title'] = 'E-League Videos / VOD / RocketLeague';
        $titles[] = ['titleItem' => $title_item_1];

        $title_item_2 = array();
        $title_item_2['titleType'] = 'Episode Title1';
        $title_item_2['title'] = $video_data->name->value;
        $titles[] = ['titleItem' => $title_item_2];

        $this->setTitles($titles);

        $this->setDuration($video_data->field_duration->value);


        // Set data for fwReplaceAirDates node
        // 'true' is default. The value is string boolean.
        $this->setReplaceAirDates('true');
    }

    /**
     * Return network name, e.g., TBS, TNT, AS, TCM.
     *
     * @return string
     *    Network name.
     */
    public function getNetwork() {
        return $this->network;
    }

    /**
     * Return id for the 'video_id' attribute of the 'FWVideoDocument' node.
     *
     * @return mixed
     *    Video id.
     */
    public function getVideoId() {
        return $this->videoId;
    }

    /**
     * Set video id.
     *
     * @param mixed $video_id
     *    Video id.
     */
    public function setVideoId($video_id) {
        $this->videoId = $video_id;
    }

    /**
     * Return contact email address.
     *
     * This value is for 'contact_email' attribute of the 'FWCoreContainer' node.
     *
     * @return string
     *    Email address.
     */
    public function getContactEmail() {
        return $this->contactEmail;
    }

    /**
     * Set contact email address.
     *
     * @param string $email
     *    Email address.
     */
    public function setContactEmail($email) {
        $this->contactEmail = $email;
    }

    /**
     * Return value for fwTitles node and its subnodes.
     *
     * Here is the schema of the 'fwTitles' array.
     * [
     *   ['titleItem' => ['titleType' => 'Series',
     *                    'title' => '![CDATA[TNT Videos, Shows]]'],
     *   ['titleItem' => ['titleType' => 'Episode Title1',
     *                    'title' => 'Heartbreaker']]
     * ]
     *
     * @return array
     *    The title array with structure like above.
     */
    public function getTitles() {
        return $this->titles;
    }

    /**
     * Set titles array.
     *
     * @param array $titles
     *    Title items.
     */
    public function setTitles(array $titles) {
        $this->titles = $titles;
    }

    /**
     * Return value (in seconds) for fwDuration node.
     *
     * @return int
     *    Duration in seconds.
     */
    public function getDuration() {
        return $this->duration;
    }

    /**
     * Set duration number in seconds.
     *
     * @param int $duration
     *    Duration.
     */
    public function setDuration($duration) {
        $this->duration = $duration;
    }

    /**
     * Return an array of description items in the following schema:.
     *
     * [
     *  ['descriptionItem'=>['description'=>'test','descriptionType =>'Episode']],
     *  ['descriptionItem'=>['description'=>'draco','descriptionType'=>'Episode']]
     * ]
     *
     * @return array
     *    Description items.
     */
    public function getDescriptions() {
        return $this->descriptions;
    }

    /**
     * Set description items.
     *
     * @param array $descriptions
     *    Description items.
     */
    public function setDescriptions(array $descriptions) {
        $this->descriptions = $descriptions;
    }

    /**
     * Return a string value 'true' or 'false' for fwReplaceAirDates node.
     *
     * @return string
     *    String flag with value 'true' or 'false'.
     */
    public function getReplaceAirDates() {
        return $this->replaceAirDates;
    }

    /**
     * Set air dates flag 'true' or 'false'.
     *
     * @param string $replace_air_dates
     *    A string flag.
     */
    public function setReplaceAirDates($replace_air_dates) {
        $this->replaceAirDates = $replace_air_dates;
    }

    /**
     * Return title id.
     *
     * A content like clip may not have a title id.
     *
     * @return int
     *    title id.
     */
    public function getTitleId() {
        return $this->titleId;
    }

    /**
     * Return data for fwSecondaryIds node. The array schema looks as follows.
     *
     * [
     *    ['fwSecondaryId' => '633426086'],
     *    ['fwSecondaryId' => '633426236'],
     * ]
     *
     * @return array
     *    Secondary ids.
     */
    public function getSecondaryIds() {
        return [];
    }

}
