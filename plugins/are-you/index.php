<?php 
/*
 * Plugin Name:       Are you
 * Plugin URI:        https:owadud.fun/
 * Description:       WooCommerce Reports.
 * Version:           1.0.0
 * Author:            Owadud
 * Author URI:        https://owadud.fun/
 
 */

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class AreYou{
    function __construct(){
        add_action('enqueue_block_editor_assets',array($this,'adminAssets'));
    }

    function adminAssets(){
        wp_enqueue_script('ournewlocktype',plugin_dir_url(__FILE__) . 'build/index.js',array('wp-blocks','wp-element'));
    }

}
$areyou = new AreYou();