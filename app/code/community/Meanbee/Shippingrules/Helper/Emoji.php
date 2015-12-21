<?php
class Meanbee_Shippingrules_Helper_Emoji extends Mage_Core_Helper_Abstract {

	public function _construct()
	{
		$this->setLibraryClient(new Emojione_Client());
	}

	/**
	 * Helper function for emoji libary to convert unicode character(s) to emoji image(s).
	 *
	 * @param  string  $unicode
	 * @param  boolean &$match  Side-effect; indicates whether any emoji were found.
	 * @return string           HTML with image tags.
	 */
	public function unicodeToImage(string $unicode, &$match)
	{
		$html = $this->getLibraryClient()->unicodeToImage($unicode);
		$match = (bool) preg_match("/<img/", $imageCode);
		return $html;
	}
}