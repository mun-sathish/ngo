<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;


// Get All Feedback by Audio ID
$app->get('/api/resource/audio/{id}/feedback', function(Request $request, Response $response){
    $id = $request->getAttribute('id');
    $sql = "SELECT l.username, f.* FROM user_login l, audio a, audio_feedback f where a.audio_id = f.audio_id and a.audio_id = $id and l.user_login_id = f.user_login_id";
    return getRequest($sql, false);
});

// Get All Feedback by Video ID
$app->get('/api/resource/video/{id}/feedback', function(Request $request, Response $response){
    $id = $request->getAttribute('id');
    $sql = "SELECT l.username, f.* FROM user_login l, video a, video_feedback f where a.video_id = f.video_id and a.video_id = $id and l.user_login_id = f.user_login_id";
    return getRequest($sql, false);
});

// Get All Feedback by Book ID
$app->get('/api/resource/book/{id}/feedback', function(Request $request, Response $response){
    $id = $request->getAttribute('id');
    $sql = "SELECT * FROM book a, book_feedback f where a.book_id = f.book_id and a.book_id = $id";
    return getRequest($sql, false);
});

// Get All Feedback by Task ID
$app->get('/api/resource/task/{id}/feedback', function(Request $request, Response $response){
    $id = $request->getAttribute('id');
    $sql = "SELECT l.username, f.* FROM user_login l, task a, task_feedback f where a.task_id = f.task_id and a.task_id = $id and l.user_login_id = f.user_login_id";
    return getRequest($sql, false);
});

// Adding Feedback By User ID & Book ID
$app->post('/api/resource/book/feedback/add', function(Request $request, Response $response){
    $book_id = $request->getParam('book_id');
    $feedback = $request->getParam('feedback');
    $rating = $request->getParam('rating');
    $user_login_id = $request->getParam('user_login_id');

    $sql = "INSERT INTO book_feedback (book_id, feedback, rating, user_login_id) VALUES ('$book_id', '$feedback', '$rating', '$user_login_id')";
   
    return postRequest($sql, STATUS::$_M_SUCCESS_POSTED);
});

// Adding Feedback By User ID & Audio ID
$app->post('/api/resource/audio/feedback/add', function(Request $request, Response $response){
    $audio_id = $request->getParam('audio_id');
    $feedback = $request->getParam('feedback');
    $rating = $request->getParam('rating');
    $user_login_id = $request->getParam('user_login_id');

    $sql = "INSERT INTO audio_feedback (audio_id, feedback, rating, user_login_id) VALUES ('$audio_id', '$feedback', '$rating', '$user_login_id')";
    
    return postRequest($sql, STATUS::$_M_SUCCESS_POSTED);
});

// Adding Feedback By User ID & Video ID
$app->post('/api/resource/video/feedback/add', function(Request $request, Response $response){
    $video_id = $request->getParam('video_id');
    $feedback = $request->getParam('feedback');
    $rating = $request->getParam('rating');
    $user_login_id = $request->getParam('user_login_id');

    $sql = "INSERT INTO video_feedback (video_id, feedback, rating, user_login_id) VALUES ('$video_id', '$feedback', '$rating', '$user_login_id')";
   
    return postRequest($sql, STATUS::$_M_SUCCESS_POSTED);
});

// Adding Feedback By User ID & Task ID
$app->post('/api/resource/task/feedback/add', function(Request $request, Response $response){
    $task_id = $request->getParam('task_id');
    $feedback = $request->getParam('feedback');
    $rating = $request->getParam('rating');
    $user_login_id = $request->getParam('user_login_id');

    $sql = "INSERT INTO task_feedback (task_id, feedback, rating, user_login_id) VALUES ('$task_id', '$feedback', '$rating', '$user_login_id')";
   
    return postRequest($sql, STATUS::$_M_SUCCESS_POSTED);
});