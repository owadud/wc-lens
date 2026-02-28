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
        add_action('init',array($this,'adminAssets'));
    }

    function adminAssets(){
      wp_register_style('quizeditcss', plugin_dir_url(__FILE__) . 'build/index.css');
      
       wp_register_script('ournewblocktype', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element','wp-editor'));
    register_block_type('ourplugin/are-you', array(
      'editor_script' => 'ournewblocktype',
      'editor_style' => 'quizeditcss',
      'render_callback' => array($this, 'theHTML')
    ));
    }

    function theHTML($attributes) {
    
    if(!is_admin()){
      wp_enqueue_script( 'frontendAttention', plugin_dir_url( __FILE__ ).'build/frontend.js', array('wp-element') );
       wp_enqueue_style( 'attentionFrontendStyle', plugin_dir_url( __FILE__ ). 'build/frontend.css');
      
    }
    ob_start(); ?>
    
    <div class="are-you-frontend">
    </div>
    
    <?php return ob_get_clean();
  }

}

$areyou = new AreYou();