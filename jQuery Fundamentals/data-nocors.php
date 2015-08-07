<?php
    
    $pre = '{ "people": [';
    $people = '{ "name": "Dan", "position": "Web developer" }, { "name": "Fred", "position": "Designer" }';
    $suff = ']}';
    
    if (isset($_POST["name"])) {
        $new = '{ "name": "Dan", "position": "Web developer" }, { "name": "Fred", "position": "Designer" }, { "name": "' . htmlspecialchars($_POST["name"]) . '", "position": "Guest" }';
    }
    
    if (isset($new)) {
        echo $_GET["callback"] . "(" . $pre . $new . $suff . ")";    
    } else {
        echo $_GET["callback"] . "(" . $pre . $people . $suff . ")";    
    }
    
?>