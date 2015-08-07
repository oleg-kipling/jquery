<?php
    header('Content-type: application/json');
    header('Access-Control-Allow-Origin: *');
    
    sleep(10);

    echo '{ "text": "This one is a bit slow" }';
    
?>