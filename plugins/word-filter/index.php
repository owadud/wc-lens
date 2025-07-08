<?php

/*
 * Plugin Name:       Word Filter
 * Plugin URI:        https:owadud.fun/
 * Description:       WooCommerce Reports.
 * Version:           1.0.0
 * Author:            Owadud
 * Author URI:        https://owadud.fun/
 
 */

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

 class WordFilter{
    function __construct(){
        add_action('admin_menu',array($this,'ourMenu'));
        if(get_option('words_to_filter')){
            add_filter('the_content',array($this,'filterlogic'));
        }
        add_action('admin_init',array($this,'ourSettings'));


    }
    function ourSettings(){
        add_settings_section('replacement-text-section',null,null,'word-filter-options');
        register_setting('replacementFields','replacementText');
        add_settings_field('replacement-text','Filtered Text',array($this,'replacementFieldHTML'),'word-filter-options','replacement-text-section');
    }

    function replacementFieldHTML(){ ?>
        <input type="text" name='replacementText' value="<?php echo esc_attr(get_option('replacementText','***')) ?>">
        <p>Please leave blank if don't want to replace</p>
    <?php }

    function filterlogic($content){
        $badwords = explode(',',get_option('words_to_filter'));
        $badwordsTrim = array_map('trim',$badwords);
        return str_ireplace($badwordsTrim,esc_html(get_option('replacementText','#*#*')),$content);

    }
    function ourMenu(){
       $wordfilterAdminHook = add_menu_page('word To filter','word filter','manage_options','wordfilterpage',array($this, 'wordMenu'),plugin_dir_url(__FILE__) . 'custom.svg', 100);

        // add_menu_page('word To filter','word filter','manage_options','wordfilterpage',array($this, 'wordMenu'),'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMCAyMEMxNS41MjI5IDIwIDIwIDE1LjUyMjkgMjAgMTBDMjAgNC40NzcxNCAxNS41MjI5IDAgMTAgMEM0LjQ3NzE0IDAgMCA0LjQ3NzE0IDAgMTBDMCAxNS41MjI5IDQuNDc3MTQgMjAgMTAgMjBaTTExLjk5IDcuNDQ2NjZMMTAuMDc4MSAxLjU2MjVMOC4xNjYyNiA3LjQ0NjY2SDEuOTc5MjhMNi45ODQ2NSAxMS4wODMzTDUuMDcyNzUgMTYuOTY3NEwxMC4wNzgxIDEzLjMzMDhMMTUuMDgzNSAxNi45Njc0TDEzLjE3MTYgMTEuMDgzM0wxOC4xNzcgNy40NDY2NkgxMS45OVoiIGZpbGw9IiNGRkRGOEQiLz4KPC9zdmc+',100);
        add_submenu_page('wordfilterpage','word filter option','Word list','manage_options','wordfilterpage',array($this,'wordMenu'));
        add_submenu_page('wordfilterpage','word filter option','option','manage_options','word-filter-options',array($this,'wordOption'));
        add_action("load-{$wordfilterAdminHook}",array($this,"wordFilterCSS"));


    }
    function wordFilterCSS(){
        wp_enqueue_style('filterAdminCSS', plugin_dir_url(__FILE__). 'style.css');
    }

    function handleForm(){
       if(wp_verify_nonce($_POST['ourNonce'],'saveFilterWords') AND current_user_can('manage_options') ){
        update_option('words_to_filter',sanitize_text_field($_POST['plugin_words_to_filter'])) ;?>
        <div class="updated">
            <p>Your Filter words has saved</p>
        </div>
       <?php }
       else{ ?>
        <div class="error">
            <p>You don't have the permission.</p>
        </div>
       <?php }

     }

    function wordMenu(){ ?>
       <div class="wrap">
        <h1>Word Filter</h1>
        <?php if(isset($_POST['justsumitted']) == "true") $this->handleForm() ?>
        <form method="POST">
            <input type="hidden" name="justsumitted" value="true">
            <?php wp_nonce_field('saveFilterWords','ourNonce') ?>
            <label for="plugin_words_to_filter"><p>Enter <strong>the words that </strong>you want to filter</p></label>
            <div class="wordfilter_flex">
                <textarea name="plugin_words_to_filter" id="plugin_words_to_filter" placeholder="plugin, wordpress, theme"><?php echo esc_textarea(get_option('words_to_filter')) ?></textarea>
            </div>
            <input type="submit" name="submit" id="submit" class="button button-primary" value="Submit">
        </form>
       </div>
     <?php 
    }
    function wordOption(){ ?>
        <div class="wrap">
            <h1>Word Filter Option</h1>
            <form action="options.php" method="POST">
                <?php
                settings_errors();
                settings_fields('replacementFields');
                do_settings_sections('word-filter-options');
                submit_button();
                ?>
            </form>
        </div>
        <?php
    }
 }

 $wordFilter = new WordFilter();

