<?php
/* Catch requested route */
$request = $_SERVER['REQUEST_URI'];

/* require __DIR__ . '/app/tracking/tracking.php' ;
 */
require __DIR__ . '/app/views/partials/head.phtml';

/* switch ($request) {
    case (strpos($_SERVER['REQUEST_URI'], 'documentatie/doc') == false) :
        require __DIR__ . '/app/views/partials/nav.phtml';
        break;
}
 */
/* require __DIR__ . '/app/views/partials/cookieverklaring.phtml'; */

/**
 * de code in het .htacces bestand redirect alle URLs naar dit index.php bestand
 * 
 * de switch statement hier onder bepaalt welke view er weergegeven wordt, afhankelijk van de URL
 * 
 * de code op lijn 29 checkt of de request uri 'documentatie/doc' bevat en verwijst door naar de document.php pagina. Daar wordt verder bepaald welk document getoond wordt
 * 
 * @param request
 * @return view
 */

switch ($request) {
    case '/'    :
        require __DIR__ . '/app/views/home.html';
        break;
    case '/home'    :
        require __DIR__ . '/app/views/home.html';
        break;
/*     case '/documentatie' :
        require __DIR__ . '/app/views/documentatie.html';
        break;
    case (strpos($_SERVER['REQUEST_URI'], 'documentatie/doc') !== false) :
        require __DIR__ . '/app/views/partials/document.php';
        break;
    case '/contact'    :
        require __DIR__ . '/app/views/contactpagina.html';
        break;
    case '/over-pmt'    :
        require __DIR__ . '/app/views/over-pmt.html';
        break;
    case '/tool'    :
        require __DIR__ . '/app/views/tool.html';
        break;
    case '/dashboard'    :
        require __DIR__ . '/app/views/dashboard.html';
        break;
    case '/resetPW'    :
        require __DIR__ . '/app/views/resetPW.html';
        break;
    case '/changePW'    :
        require __DIR__ . '/app/views/changePW.html';
        break; */
}

require __DIR__ . '/app/views/partials/foot.phtml';

?>