<?php

/*
 * Plugin Name:       WC DataLens
 * Plugin URI:        https:owadud.fun/
 * Description:       WooCommerce Reports.
 * Version:           1.10.3
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Owadud
 * Author URI:        https://owadud.fun/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:        https://example.com/my-plugin/
 * Text Domain:       wc-datalens
 * Domain Path:       /languages
 
 */

//  add_filter('the_content','addToEndOfPost');

//  function addToEndOfPost($content){
//     if(is_single() && is_main_query()){
//         return $content . '<p>My name is Owadud</p>';
//     }
    
//     return $content;

//  }

class WpWordCountPlugin{
    function __construct(){
        add_action('admin_menu',array($this,'settingsMenu'));
        add_action('admin_init',array($this,'settings'));
        add_filter('the_content',array($this,'ifwrap'));
        

    }
    function ifwrap($content){
        if(is_main_query() AND is_single() AND (
            get_option('wcp_word','1') OR get_option('wcp_char','1') OR get_option('wcp_word','1')
            )){
            return $this->createHTML($content);
        }
        return $content;
    }

    function createHTML($content){

        $html = '<h3>' . get_option('wcp_headline','post statistics') .'</h3>';

        if(get_option('wcp_location','0') == '0'){
            return $html . $content;
        }
        return $content . $html;

    }




    function settings(){
        add_settings_section('wcp_first_section',null,null,'word-count-settings-page');
        
        add_settings_field('wcp_location','Display Location',array($this,'locationHtml'),'word-count-settings-page','wcp_first_section');
        register_setting('wordcountplugin','wcp_location',array('sanitize_callback'=>array($this,'sanitizeValue'),'default'=>'0'));
        //headline
        add_settings_field('wcp_headline','Headline Text',array($this,'headlineHtml'),'word-count-settings-page','wcp_first_section');
        register_setting('wordcountplugin','wcp_headline',array('sanitize_callback'=>'sanitize_text_field','default'=>'post statistics'));

        //checkbox
         add_settings_field('wcp_word','Word count Text',array($this,'counthHtml'),'word-count-settings-page','wcp_first_section');
        register_setting('wordcountplugin','wcp_word',array('sanitize_callback'=>'sanitize_text_field','default'=>'1'));

        //character count 
        add_settings_field('wcp_char','Character Count',array($this,'charHtml'),'word-count-settings-page','wcp_first_section');
        register_setting('wordcountplugin','wcp_char',array('sanitize_callback'=>'sanitize_text_field','default'=>'1'));

        //read time
         add_settings_field('wcp_read','Read Time',array($this,'readHtml'),'word-count-settings-page','wcp_first_section');
        register_setting('wordcountplugin','wcp_read',array('sanitize_callback'=>'sanitize_text_field','default'=>'1'));
    }
    function sanitizeValue($input){
        if($input != '0' AND $input != '1'){
            add_settings_error('wcp_location','wcp_location_error','Wrong Input, try again');
            return get_option('wcp_location');
        }
        return $input;
    }

    function readHtml(){?>
    <input type="checkbox" name="wcp_read" value="1" <?php echo checked(get_option(('wcp_read')),'1')?>>
    <?php
    }

    function charHtml(){?>
    <input type="checkbox" name="wcp_char" value="1" <?php echo checked(get_option(('wcp_char')),'1')?>>
    <?php
    }

    function counthHtml(){?>
    <input type="checkbox" name="wcp_word" value="1" <?php echo checked(get_option(('wcp_word')),'1') ?>>
    <?php

    }

    function headlineHtml(){?>
    <input type="text" name="wcp_headline" value="<?php echo esc_attr(get_option('wcp_headline'))?>">
    <?php
    }
    function locationHtml(){?>
        <select name="wcp_location" id="">
            <option value="0" <?php selected(get_option('wcp_location'),'0') ?>>Beginning of post</option>
            <option value="1" <?php selected(get_option('wcp_location'),'1') ?>>End of Post</option>
 
        </select>
    <?php
    }

    function settingsMenu(){
        add_options_page('word count settings','Word Count','manage_options','word-count-settings-page',array($this,'settingPage'));
    
    }
    function settingPage(){?>
        <div class='wrap'>
            <h1>Word Count Settings</h1>
            <form action="options.php" method="POST">
                <?php 
                settings_fields('wordcountplugin');
                do_settings_sections('word-count-settings-page');
                submit_button();
                ?>

            </form>
        </div>
    <?php
    }
}

$wpwordpluign = new WpWordCountPlugin();

