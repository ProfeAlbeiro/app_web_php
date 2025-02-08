<?php
    require_once "models/DataBase.php";    
    require_once "controllers/Landing.php";
    $controller = new Landing;
    $controller->main();
?>