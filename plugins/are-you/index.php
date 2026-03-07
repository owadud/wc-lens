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
      register_block_type(__DIR__, array(
      'render_callback' => array($this, 'theHTML')
    ));
    }

  function theHTML($attributes) {   

    ob_start(); ?>
    <div class="paying-attention-update-me"><pre style="display: none;"><?php echo wp_json_encode($attributes) ?></pre></div>
    <?php return ob_get_clean();
  }
}

$areyou = new AreYou();