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
        add_menu_page('word To filter','word filter','manage_options','wordfilterpage',array($this, 'wordMenu'),plugin_dir_url(__FILE__) . 'custom.svg', 100);

        // add_menu_page('word To filter','word filter','manage_options','wordfilterpage',array($this, 'wordMenu'),'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMCAyMEMxNS41MjI5IDIwIDIwIDE1LjUyMjkgMjAgMTBDMjAgNC40NzcxNCAxNS41MjI5IDAgMTAgMEM0LjQ3NzE0IDAgMCA0LjQ3NzE0IDAgMTBDMCAxNS41MjI5IDQuNDc3MTQgMjAgMTAgMjBaTTExLjk5IDcuNDQ2NjZMMTAuMDc4MSAxLjU2MjVMOC4xNjYyNiA3LjQ0NjY2SDEuOTc5MjhMNi45ODQ2NSAxMS4wODMzTDUuMDcyNzUgMTYuOTY3NEwxMC4wNzgxIDEzLjMzMDhMMTUuMDgzNSAxNi45Njc0TDEzLjE3MTYgMTEuMDgzM0wxOC4xNzcgNy40NDY2NkgxMS45OVoiIGZpbGw9IiNGRkRGOEQiLz4KPC9zdmc+',100);
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

