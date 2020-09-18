<?php

function THEMENAME_files() {
  wp_enqueue_style('THEMENAME_main_styles', get_stylesheet_uri());
}

add_action('wp_enqueue_scripts', 'THEMENAME_files');