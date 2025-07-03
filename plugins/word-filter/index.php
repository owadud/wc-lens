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
    }
    function ourMenu(){
        add_menu_page('word To filter','word filter','manage_options','wordfilterpage',array($this, 'wordMenu'),'dashicons-smiley',100);
        add_submenu_page('wordfilterpage','word filter option','Word list','manage_options','wordfilterpage',array($this,'wordMenu'));
        add_submenu_page('wordfilterpage','word filter option','option','manage_options','word-filter-options',array($this,'wordOption'));
    }
    function wordMenu(){ ?>
       Hello world. 
     <?php 
    }
    function wordOption(){ ?>
        Filter option.
        <?php
    }
 }

 $wordFilter = new WordFilter();

