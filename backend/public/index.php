<?php

require '../vendor/autoload.php'; 
require '../src/config/dbConnector.php';
require '../src/config/controllerInit.php';

foreach(glob("../src/controller/*.php") as $file){
    require $file;
}

$app->run();
