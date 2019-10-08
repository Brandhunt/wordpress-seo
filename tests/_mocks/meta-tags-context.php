<?php
namespace Yoast\WP\Free\Tests\Mocks;

use WP_Block_Parser_Block;
use WP_Post;
use WPSEO_Replace_Vars;
use Yoast\WP\Free\Helpers\Image_Helper;
use Yoast\WP\Free\Helpers\Options_Helper;
use Yoast\WP\Free\Helpers\Schema\ID_Helper;
use Yoast\WP\Free\Helpers\Url_Helper;
use Yoast\WP\Free\Models\Indexable;
use Yoast\WP\Free\Presentations\Indexable_Presentation;

/**
 * Class Meta_Tags_Context
 */
class Meta_Tags_Context extends \Yoast\WP\Free\Context\Meta_Tags_Context {

	/**
	 * @var Indexable
	 */
	public $indexable;

	/**
	 * @var WP_Block_Parser_Block[]
	 */
	public $blocks;

	/**
	 * @var WP_Post
	 */
	public $post;

	/**
	 * @var Indexable_Presentation
	 */
	public $presentation;

	/**
	 * @var bool
	 */
	public $has_image = false;

	/**
	 * @var string
	 */
	public $canonical;

	/**
	 * @var string
	 */
	public $title;

	/**
	 * @var string
	 */
	public $description;

	/**
	 * @var string
	 */
	public $id;

	/**
	 * @var string
	 */
	public $site_name;

	/**
	 * @var string
	 */
	public $site_url;

	/**
	 * @var string
	 */
	public $company_name;

	/**
	 * @var int
	 */
	public $company_logo_id;

	/**
	 * @var int
	 */
	public $site_user_id;

	/**
	 * @var string
	 */
	public $site_represents;

	/**
	 * @var array|false
	 */
	public $site_represents_reference;

	/**
	 * @var bool
	 */
	public $breadcrumbs_enabled;

	/**
	 * @var string
	 */
	public $schema_page_type;

	/**
	 * @var string
	 */
	public $main_schema_id;

	/**
	 * @var bool
	 */
	public $open_graph_enabled = true;

	/**
	 * Meta_Tags_Context constructor.
	 */
	public function __construct() {
		// Intentionally empty.
	}
}
