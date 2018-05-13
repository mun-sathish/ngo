<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
require '../src/util/statusOutputUtil.php';
require '../src/util/statusVariables.php';

/*
// User Signup
{
	"username" : "sathish",
	"name" : "Sathish Dustakar",
	"password" : "sathish1",
	"securityQuestion" : "What is your favorite dish?",
	"securityQuestionAnswer" : "What is your favorite dish?",
	"phone" : 7353578127,
	"email" : "mun.sathish@gmail.com"
}
*/
$app->post('/user/signup', function(Request $request, Response $response){

    $username = $request->getParam('username');
    $name = $request->getParam('name');
    $password = $request->getParam('password');
    $securityQuestion = $request->getParam('securityQuestion');
    $securityQuestionAnswer = $request->getParam('securityQuestionAnswer');
    $phone = $request->getParam('phone');
    $email = $request->getParam('email');
    
    if($username === NULL || $password === NULL || $name === NULL || $securityQuestion === NULL || $securityQuestionAnswer === NULL || $phone === NULL || $email === NULL)
    {
        return showOutput(STATUS::$_C_SIGNUP_FAILURE_INPUT_UNAVAILABLE, STATUS::$_M_SIGNUP_FAILURE_INPUT_UNAVAILABLE);
    }

    $sql = "INSERT INTO user_login (username, name, password, security_question, security_question_answer, phone, email) VALUES
    (:username, :name, :password, :security_question, :security_question_answer, :phone, :email)";
   
   try{
        // Get DB Object
        $db = new databaseConnector();
        // Connect
        $db = $db->connect();
        $stmt = $db->prepare($sql);
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':password', $password);
        $stmt->bindParam(':security_question', $securityQuestion);
        $stmt->bindParam(':security_question_answer', $securityQuestionAnswer);
        $stmt->bindParam(':phone', $phone);
        $stmt->bindParam(':email', $email);

        $stmt->execute();
        return showOutput(STATUS::$_C_SUCCESS, STATUS::$_M_SUCCESS_SIGNUP);

    } catch(PDOException $e){
        return showOutput(STATUS::$_C_PDOEXCEPTION, STATUS::$_M_PDOEXCEPTION . $e->getMessage());
    }
});

// User Update
$app->post('/user/update', function(Request $request, Response $response){
    
    $username = $request->getParam('username');
    $password = $request->getParam('password');
    $securityQuestion = $request->getParam('securityQuestion');
    $securityQuestionAnswer = $request->getParam('securityQuestionAnswer');
    $phone = $request->getParam('phone');
    $email = $request->getParam('email');
    
    $sql = "";
    $match = "-";

    if($username === NULL) {
        return showOutput(STATUS::$_C_USER_UPDATE_FIELD_UNAVAILABLE, STATUS::$_M_USER_UPDATE_FIELD_UNAVAILABLE . " = username");
    }
    // Update Password
    if($password !== NULL) {
         $sql = "UPDATE user_login SET
				password 	= :password,
                old_password = :old_password
            WHERE username = '$username'";
        $match = "password";
    } else if($securityQuestion !== NULL && $securityQuestionAnswer !== NULL) {
         $sql = "UPDATE user_login SET
				security_question 	= :security_question,
                security_question_answer = :security_question_answer
            WHERE username = '$username'";
        $match = "security_question";
    } else if( $phone !== NULL ) {
        $sql = "UPDATE user_login SET
				phone = :phone
            WHERE username = '$username'";
        $match = "phone";
    } else if( $email !== NULL ) {
        $sql = "UPDATE user_login SET
				email = :email
            WHERE username = '$username'";
        $match = "email";
    } else {
       return  showOutput(STATUS::$_C_USER_UPDATE_FIELD_UNAVAILABLE,  STATUS::$_M_USER_UPDATE_FIELD_UNAVAILABLE);
    }
   
   
   try{
        // Get DB Object
        $db = new databaseConnector();
        // Connect
        $db = $db->connect();
        $stmt = $db->prepare($sql);

        switch ($match)
        {
            case "password":
                $res = $db->query("SELECT password from USER_LOGIN where username = '$username'")->fetchAll(PDO::FETCH_OBJ);
                $stmt->bindParam(':password', $password);
                $stmt->bindParam(':old_password', $res[0]->password);
                break;
            case "security_question":
                $stmt->bindParam(':security_question', $securityQuestion);
                $stmt->bindParam(':security_question_answer', $securityQuestionAnswer);
                break;
            case "phone":
                $stmt->bindParam(':phone', $phone);
                break;
            case "email":
                $stmt->bindParam(':email', $email);
                break;
        }
        $stmt->execute();
        return showOutput(STATUS::$_C_SUCCESS, STATUS::$_M_SUCCESS_USER_UPDATED);
        
    } catch(PDOException $e){
       return showOutput(STATUS::$_C_PDOEXCEPTION, STATUS::$_M_PDOEXCEPTION . $e->getMessage());
    }
});

//User Sign In
$app->post('/user/signin', function(Request $request, Response $response){

    $username = $request->getParam('username');
    $password = $request->getParam('password');
    
    if($username === NULL || $password === NULL)
    {
       return $response->write(showOutput(STATUS::$_C_SIGNIN_FAILURE_INPUT_UNAVAILABLE, STATUS::$_M_SIGNIN_FAILURE_INPUT_UNAVAILABLE));
    }

    $sql = "SELECT * FROM USER_LOGIN where username = '$username' and password ='$password'";
   
   try{
        // Get DB Object
        $db = new databaseConnector();
        // Connect
        $db = $db->connect();
        $stmt = $db->query($sql);
        $res = $stmt->fetchAll(PDO::FETCH_OBJ);
        if(!isset($res[0]))
            return $response->write(showOutput(STATUS::$_C_SIGNIN_FAILURE_INVALID_CRED, STATUS::$_M_SIGNIN_FAILURE_INVALID_CRED));
        else
            return $response->write(showOutputWithRes(STATUS::$_C_SUCCESS, STATUS::$_M_SUCCESS_SIGNIN, $res[0]));

    } catch(PDOException $e){
        return $response->write(showOutput(STATUS::$_C_PDOEXCEPTION, STATUS::$_M_PDOEXCEPTION . $e->getMessage()));
    }
});

// Get All Secuity Questions
$app->get('/security-question', function(Request $request, Response $response){
    $sql = "SELECT * FROM security_question";
    try{
        // Get DB Object
        $db = new databaseConnector();
        // Connect
        $db = $db->connect();
        $stmt = $db->query($sql);
        $customers = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($customers);
    } catch(PDOException $e){
        return showOutput(STATUS::$_C_PDOEXCEPTION, STATUS::$_M_PDOEXCEPTION . $e->getMessage());
    }
});

// Get Security Question By ID
$app->get('/security-question/{id}', function(Request $request, Response $response){
    $id = $request->getAttribute('id');
    $sql = "SELECT * FROM security_question WHERE security_question_id = $id";
    try{
        // Get DB Object
        $db = new databaseConnector();
        // Connect
        $db = $db->connect();
        $stmt = $db->query($sql);
        $customers = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($customers);
    } catch(PDOException $e){
        return showOutput(STATUS::$_C_PDOEXCEPTION, STATUS::$_M_PDOEXCEPTION . $e->getMessage());
    }
});

// Adding Security Question
$app->post('/security-question/add', function(Request $request, Response $response){
    $question = $request->getParam('question');

    $sql = "INSERT INTO security_question (question) VALUES
    (:question)";
   
   try{
        // Get DB Object
        $db = new databaseConnector();
        // Connect
        $db = $db->connect();

        $stmt = $db->prepare($sql);

        $stmt->bindParam(':question', $question);

        $stmt->execute();

        echo '{"notice": {"text": "Customer Added"}';

    } catch(PDOException $e){
        return showOutput(STATUS::$_C_PDOEXCEPTION, STATUS::$_M_PDOEXCEPTION . $e->getMessage());
    }
});

// Get Security Question By ID
$app->post('/security-question/delete/{id}', function(Request $request, Response $response){
    $id = $request->getAttribute('id');
    $sql = "DELETE FROM security_question WHERE security_question_id = $id";
    try{
        // Get DB Object
        $db = new databaseConnector();
        // Connect
        $db = $db->connect();
        $stmt = $db->prepare($sql);
        $stmt->execute();
        return showOutput(STATUS::$_C_SUCCESS, STATUS::$_M_SUCCESS_SIGNIN);
    } catch(PDOException $e){
        return showOutput(STATUS::$_C_PDOEXCEPTION, STATUS::$_M_PDOEXCEPTION . $e->getMessage());
    }
});