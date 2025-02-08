<?php
    require_once "models/DataBase.php";
    $prueba = DataBase::connection();
    require_once "controllers/Landing.php";
    $controller = new Landing;
    $controller->main();
?>