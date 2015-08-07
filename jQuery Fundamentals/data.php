<?php
    header('Content-type: application/json');
    header('Access-Control-Allow-Origin: *');
    
    $pre = '{ "people": [';
    $people = '{ "name": "Dan", "position": "Web developer" }, { "name": "Fred", "position": "Designer" }';
    $suff = ']}';
    
    if (isset($_POST["name"])) {
        $new = '{ "name": "Dan", "position": "Web developer" }, { "name": "Fred", "position": "Designer" }, { "name": "' . htmlspecialchars($_POST["name"]) . '", "position": "Guest" }';
    }
    
    if (isset($new)) {
        echo $pre . $new . $suff;    
    } else {
        echo $pre . $people . $suff;    
    }
    
?>