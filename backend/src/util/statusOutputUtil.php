<?php

    $var = "hello";

    function showOutput($statusCode, $statusMessage){
        $obj = new stdClass();
        $obj->statusCode = $statusCode;
        $obj->statusMessage=$statusMessage;
        return json_encode($obj);
    }
    
     function showOutputWithRes($statusCode, $statusMessage, $resource){
        $obj = new stdClass();
        $obj->statusCode = $statusCode;
        $obj->statusMessage=$statusMessage;
        $obj->res=$resource;
        return json_encode($obj);
    }


    
    //  $_M_ = "";
    //  $_M_ = "";
    //  $_M_ = "";
    //  $_M_ = "";