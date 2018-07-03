<?php
require 'statusOutputUtil.php';
require 'statusVariables.php';

function getRequest($sql, $isById)
{
    try {
        // Get DB Object
        $db = new databaseConnector();
        // Connect
        $db = $db->connect();
        $stmt = $db->query($sql);
        $res = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        if ($isById) {
            if (!isset($res[0])) {
                return "{}";
            } else {
                return json_encode($res[0]);
            }
        } else {
            return json_encode($res);
        }

    } catch (PDOException $e) {
        return showOutput(STATUS::$_C_PDOEXCEPTION, STATUS::$_M_PDOEXCEPTION . $e->getMessage());
    }
}

function postRequest($sql, $message)
{
    try {
        // Get DB Object
        $db = new databaseConnector();
        // Connect
        $db = $db->connect();

        $stmt = $db->prepare($sql);

        $stmt->execute();

        return showOutput(STATUS::$_C_SUCCESS, $message);
    } catch (PDOException $e) {
        return showOutput(STATUS::$_C_PDOEXCEPTION, STATUS::$_M_PDOEXCEPTION . $e->getMessage());
    }
}

function handleLoginVerfication($sql, $foundMessage, $notFoundMessage, $isSignInRequest){
    try {
        // Get DB Object
        $db = new databaseConnector();
        // Connect
        $db = $db->connect();
        $stmt = $db->query($sql);
        $res = $stmt->fetchAll(PDO::FETCH_OBJ);
        if ($isSignInRequest && !isset($res[0])) {
            return showOutput(STATUS::$_C_SIGNIN_FAILURE_INVALID_CRED, $notFoundMessage);
        } else if($isSignInRequest && isset($res[0])) {
            return showOutputWithRes(STATUS::$_C_SUCCESS, $foundMessage, $res[0]);
        } else if (!$isSignInRequest && !isset($res[0])) {
            return showOutput(STATUS::$_C_SUCCESS, $notFoundMessage);
        } else if(!$isSignInRequest && isset($res[0])) {
            return showOutputWithRes(STATUS::$_C_SIGNUP_USERNAME_NOT_AVAILABLE, $foundMessage, $res[0]);
        }

        
    } catch (PDOException $e) {
        return $response->write(showOutput(STATUS::$_C_PDOEXCEPTION, STATUS::$_M_PDOEXCEPTION . $e->getMessage()));
    }
}