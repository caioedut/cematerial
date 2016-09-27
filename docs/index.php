<?php

function base_url($uri = '')
{
    return 'http' . ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') ? 's' : '') . '://' . $_SERVER['HTTP_HOST'] . str_replace('//', '/', dirname($_SERVER['SCRIPT_NAME']) . '/') . $uri;
}

function load_header($title = 'CEMaterial')
{
    include 'views/_template/header.php';
}

function code($str, $lng = 'html') {
    return '<pre><code  data-language="' . $lng . '">' . trim(htmlentities($str)) . '</code></code></pre>';
}

$uri = explode('/', trim(array_shift(array_keys($_GET)), "/"));

$router = (object)array(
    'folder' => array_shift($uri),
    'view'   => array_shift($uri)
);

$path = 'views/' . $router->folder . '/' . $router->view . '.php';

if (!file_exists($path)) {
    $path = 'views/error/404.php';
}

include 'views/_template/template.php';