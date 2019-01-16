<?php
/* Catch requested route */
$request = $_SERVER['REQUEST_URI'];

require __DIR__ . '/app/views/partials/head.phtml';

switch ($request) {
    case '/'    :
        require __DIR__ . '/app/views/home.html';
        break;
    case '/home'    :
        require __DIR__ . '/app/views/home.html';
        break;
}

require __DIR__ . '/app/views/partials/foot.phtml';

?>