<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;


function getFeedbackRequest($sql) {
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

function postFeedbackRequest1($sql) {
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

function postFeedbackRequest2($stmt) {
    try{
            $stmt->execute();
            return showOutput(STATUS::$_C_SUCCESS, STATUS::$_M_SUCCESS_RESOURCE_ADDED);
        } catch(PDOException $e){
            return showOutput(STATUS::$_C_PDOEXCEPTION, STATUS::$_M_PDOEXCEPTION . $e->getMessage());
        }
}

// Get All Feedback by Audio ID
$app->get('/resource/audio/{id}/feedback', function(Request $request, Response $response){
    $id = $request->getAttribute('id');
    $sql = "SELECT * FROM AUDIO a, AUDIO_FEEDBACK f where a.audio_id = f.audio_id and a.audio_id = $id";
    return getFeedbackRequest($sql);
});

// Get All Feedback by Video ID
$app->get('/resource/video/{id}/feedback', function(Request $request, Response $response){
    $id = $request->getAttribute('id');
    $sql = "SELECT * FROM VIDEO a, VIDEO_FEEDBACK f where a.video_id = f.video_id and a.video_id = $id";
    return getFeedbackRequest($sql);
});

// Get All Feedback by Book ID
$app->get('/resource/book/{id}/feedback', function(Request $request, Response $response){
    $id = $request->getAttribute('id');
    $sql = "SELECT * FROM BOOK a, BOOK_FEEDBACK f where a.book_id = f.book_id and a.book_id = $id";
    return getFeedbackRequest($sql);
});

// Adding Feedback By User ID & Book ID
$app->post('/resource/book/feedback/add', function(Request $request, Response $response){
    $book_id = $request->getParam('book_id');
    $feedback = $request->getParam('feedback');
    $rating = $request->getParam('rating');
    $user_login_id = $request->getParam('user_login_id');

    $sql = "INSERT INTO BOOK_FEEDBACK (book_id, feedback, rating, user_login_id) VALUES (:book_id, :feedback, :rating, :user_login_id)";
   
    $stmt = postFeedbackRequest1($sql);
    if(isset($stmt->statusCode) && isset($stmt->statusMessage))
        return $stmt;
    
    $stmt->bindParam(':book_id', $book_id);
    $stmt->bindParam(':feedback', $feedback);
    $stmt->bindParam(':rating', $rating);
    $stmt->bindParam(':user_login_id', $user_login_id);

    return postFeedbackRequest2($stmt);
});

// Adding Feedback By User ID & Audio ID
$app->post('/resource/audio/feedback/add', function(Request $request, Response $response){
    $audio_id = $request->getParam('audio_id');
    $feedback = $request->getParam('feedback');
    $rating = $request->getParam('rating');
    $user_login_id = $request->getParam('user_login_id');

    $sql = "INSERT INTO AUDIO_FEEDBACK (audio_id, feedback, rating, user_login_id) VALUES (:audio_id, :feedback, :rating, :user_login_id)";
   
    $stmt = postFeedbackRequest1($sql);
    if(isset($stmt->statusCode) && isset($stmt->statusMessage))
        return $stmt;
    
    $stmt->bindParam(':audio_id', $audio_id);
    $stmt->bindParam(':feedback', $feedback);
    $stmt->bindParam(':rating', $rating);
    $stmt->bindParam(':user_login_id', $user_login_id);

    return postFeedbackRequest2($stmt);
});

// Adding Feedback By User ID & Video ID
$app->post('/resource/video/feedback/add', function(Request $request, Response $response){
    $video_id = $request->getParam('video_id');
    $feedback = $request->getParam('feedback');
    $rating = $request->getParam('rating');
    $user_login_id = $request->getParam('user_login_id');

    $sql = "INSERT INTO VIDEO_FEEDBACK (video_id, feedback, rating, user_login_id) VALUES (:video_id, :feedback, :rating, :user_login_id)";
   
    $stmt = postFeedbackRequest1($sql);
    if(isset($stmt->statusCode) && isset($stmt->statusMessage))
        return $stmt;
    
    $stmt->bindParam(':video_id', $video_id);
    $stmt->bindParam(':feedback', $feedback);
    $stmt->bindParam(':rating', $rating);
    $stmt->bindParam(':user_login_id', $user_login_id);

    return postFeedbackRequest2($stmt);
});