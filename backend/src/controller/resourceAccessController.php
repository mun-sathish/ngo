<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

function getAccessRequest($sql) {
    try{
            // Get DB Object
            $db = new databaseConnector();
            // Connect
            $db = $db->connect();
            $stmt = $db->query($sql);
            $res = $stmt->fetchAll(PDO::FETCH_OBJ);
            $db = null;
            return json_encode($res);
        } catch(PDOException $e){
            return showOutput(STATUS::$_C_PDOEXCEPTION, STATUS::$_M_PDOEXCEPTION . $e->getMessage());
        }
}

function postAccessRequest1($sql) {
    try{
            // Get DB Object
            $db = new databaseConnector();
            // Connect
            $db = $db->connect();

            $stmt = $db->prepare($sql);

            return $stmt;

        } catch(PDOException $e){
            return showOutput(STATUS::$_C_PDOEXCEPTION, STATUS::$_M_PDOEXCEPTION . $e->getMessage());
        }
}

function postAccessRequest2($stmt) {
    try{
            $stmt->execute();
            return showOutput(STATUS::$_C_SUCCESS, STATUS::$_M_SUCCESS_RESOURCE_ADDED);
        } catch(PDOException $e){
            return showOutput(STATUS::$_C_PDOEXCEPTION, STATUS::$_M_PDOEXCEPTION . $e->getMessage());
        }
}

// Get All Audio by User ID
$app->get('/resource/audio/access/{user_login_id}', function(Request $request, Response $response){
    $user_login_id = $request->getAttribute('user_login_id');
    $sql = "SELECT a.* FROM AUDIO a, USER_ACCESS_AUDIO u, USER_LOGIN ul 
                WHERE ul.user_login_id = u.user_login_id and a.audio_id = u.audio_id and ul.user_login_id = $user_login_id";
    return getAccessRequest($sql);
});

// Get All Video by User ID
$app->get('/resource/video/access/{user_login_id}', function(Request $request, Response $response){
    $user_login_id = $request->getAttribute('user_login_id');
    $sql = "SELECT a.* FROM VIDEO a, USER_ACCESS_VIDEO u, USER_LOGIN ul 
                WHERE ul.user_login_id = u.user_login_id and a.video_id = u.video_id and ul.user_login_id = $user_login_id";
    return getAccessRequest($sql);
});

// Get All Book by User ID
$app->get('/resource/book/access/{user_login_id}', function(Request $request, Response $response){
    $user_login_id = $request->getAttribute('user_login_id');
    $sql = "SELECT a.* FROM BOOK a, USER_ACCESS_BOOK u, USER_LOGIN ul 
                WHERE ul.user_login_id = u.user_login_id and a.book_id = u.book_id and ul.user_login_id = $user_login_id";
    return getAccessRequest($sql);
});


// Adding Access Audio By UserID
$app->post('/resource/audio/access/add', function(Request $request, Response $response){
    $user_login_id = $request->getParam('user_login_id');
    $audio_id = $request->getParam('audio_id');

    $sql = "INSERT INTO USER_ACCESS_AUDIO (user_login_id, audio_id) VALUES (:user_login_id, :audio_id)";
   
    $stmt = postAccessRequest1($sql);
    if(isset($stmt->statusCode) && isset($stmt->statusMessage))
        return $stmt;
    
    $stmt->bindParam(':user_login_id', $user_login_id);
    $stmt->bindParam(':audio_id', $audio_id);

    return postAccessRequest2($stmt);
});

// Adding Access Video By UserID
$app->post('/resource/video/access/add', function(Request $request, Response $response){
    $user_login_id = $request->getParam('user_login_id');
    $video_id = $request->getParam('video_id');

    $sql = "INSERT INTO USER_ACCESS_VIDEO (user_login_id, video_id) VALUES (:user_login_id, :video_id)";
   
    $stmt = postAccessRequest1($sql);
    if(isset($stmt->statusCode) && isset($stmt->statusMessage))
        return $stmt;
    
    $stmt->bindParam(':user_login_id', $user_login_id);
    $stmt->bindParam(':video_id', $video_id);

    return postAccessRequest2($stmt);
});

// Adding Access Book By UserID
$app->post('/resource/book/access/add', function(Request $request, Response $response){
    $user_login_id = $request->getParam('user_login_id');
    $book_id = $request->getParam('book_id');

    $sql = "INSERT INTO USER_ACCESS_BOOK (user_login_id, book_id) VALUES (:user_login_id, :book_id)";
   
    $stmt = postAccessRequest1($sql);
    if(isset($stmt->statusCode) && isset($stmt->statusMessage))
        return $stmt;
    
    $stmt->bindParam(':user_login_id', $user_login_id);
    $stmt->bindParam(':book_id', $book_id);

    return postAccessRequest2($stmt);
});