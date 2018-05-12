<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;


function getRequest($sql, $isById) {
    try{
            // Get DB Object
            $db = new databaseConnector();
            // Connect
            $db = $db->connect();
            $stmt = $db->query($sql);
            $res = $stmt->fetchAll(PDO::FETCH_OBJ);
            $db = null;
            if($isById)
                if(!isset($res[0]))
                    return "[]";
                else
                    return json_encode($res[0]);
            else
                return json_encode($res);
        } catch(PDOException $e){
            return showOutput(STATUS::$_C_PDOEXCEPTION, STATUS::$_M_PDOEXCEPTION . $e->getMessage());
        }
}

function postRequest1($sql) {
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

function postRequest2($stmt) {
    try{
            $stmt->execute();
            return showOutput(STATUS::$_C_SUCCESS, STATUS::$_M_SUCCESS_RESOURCE_ADDED);
        } catch(PDOException $e){
            return showOutput(STATUS::$_C_PDOEXCEPTION, STATUS::$_M_PDOEXCEPTION . $e->getMessage());
        }
}

// Get All Books
$app->get('/resource/book', function(Request $request, Response $response){
    $sql = "SELECT * FROM BOOK";
    return getRequest($sql, false);
});

// Get All Video
$app->get('/resource/video', function(Request $request, Response $response){
    $sql = "SELECT * FROM VIDEO";
    return getRequest($sql, false);
});

// Get All Audio
$app->get('/resource/audio', function(Request $request, Response $response){
    $sql = "SELECT * FROM AUDIO";
    return getRequest($sql, false);
});

// Get Book By ID
$app->get('/resource/book/{id}', function(Request $request, Response $response){
    $id = $request->getAttribute('id');
    $sql = "SELECT * FROM BOOK WHERE book_id = $id";
    return getRequest($sql, true);
});

// Get Video By ID
$app->get('/resource/video/{id}', function(Request $request, Response $response){
    $id = $request->getAttribute('id');
    $sql = "SELECT * FROM VIDEO WHERE video_id = $id";
    return getRequest($sql, true);
});

// Get Audio By ID
$app->get('/resource/audio/{id}', function(Request $request, Response $response){
    $id = $request->getAttribute('id');
    $sql = "SELECT * FROM AUDIO WHERE audio_id = $id";
    return getRequest($sql, true);
});


// Adding Audio
$app->post('/resource/audio/add', function(Request $request, Response $response){
    $title = $request->getParam('title');
    $author = $request->getParam('author');
    $genre = $request->getParam('genre');
    $speaker = $request->getParam('speaker');
    $price = $request->getParam('price');
    $discount = $request->getParam('discount');
    $is_premium = $request->getParam('is_premium');
    $is_free = $request->getParam('is_free');
    $banner = $request->getParam('banner');
    $file = $request->getParam('file');

    $sql = "INSERT INTO AUDIO (title, author, genre, speaker, price, discount, is_premium, is_free, banner, file) VALUES (:title, :author, :genre, :speaker, :price, :discount, :is_premium, :is_free, :banner, :file)";
   
    $stmt = postRequest1($sql);
    if(isset($stmt->statusCode) && isset($stmt->statusMessage))
        return $stmt;
    
    $stmt->bindParam(':title', $title);
    $stmt->bindParam(':author', $author);
    $stmt->bindParam(':genre', $genre);
    $stmt->bindParam(':speaker', $speaker);
    $stmt->bindParam(':price', $price);
    $stmt->bindParam(':discount', $discount);
    $stmt->bindParam(':is_premium', $is_premium);
    $stmt->bindParam(':is_free', $is_free);
    $stmt->bindParam(':banner', $banner);
    $stmt->bindParam(':file', $file);

    return postRequest2($stmt);
});

// Adding Video
$app->post('/resource/video/add', function(Request $request, Response $response){
    $title = $request->getParam('title');
    $author = $request->getParam('author');
    $genre = $request->getParam('genre');
    $cast = $request->getParam('cast');
    $price = $request->getParam('price');
    $discount = $request->getParam('discount');
    $is_premium = $request->getParam('is_premium');
    $is_free = $request->getParam('is_free');
    $banner = $request->getParam('banner');
    $file = $request->getParam('file');

    $sql = "INSERT INTO VIDEO (title, author, genre, cast, price, discount, is_premium, is_free, banner, file) VALUES (:title, :author, :genre, :cast, :price, :discount, :is_premium, :is_free, :banner, :file)";
   
    $stmt = postRequest1($sql);
    if(isset($stmt->statusCode) && isset($stmt->statusMessage))
        return $stmt;
    
    $stmt->bindParam(':title', $title);
    $stmt->bindParam(':author', $author);
    $stmt->bindParam(':genre', $genre);
    $stmt->bindParam(':speaker', $cast);
    $stmt->bindParam(':price', $price);
    $stmt->bindParam(':discount', $discount);
    $stmt->bindParam(':is_premium', $is_premium);
    $stmt->bindParam(':is_free', $is_free);
    $stmt->bindParam(':banner', $banner);
    $stmt->bindParam(':file', $file);

    return postRequest2($stmt);
});

// Adding Book
$app->post('/resource/book/add', function(Request $request, Response $response){
    $name = $request->getParam('name');
    $author = $request->getParam('author');
    $isbn = $request->getParam('isbn');
    $publisher = $request->getParam('publisher');
    $edition = $request->getParam('edition');
    $edition_number = $request->getParam('edition_number');
    $no_of_pages = $request->getParam('no_of_pages');
    $binding = $request->getParam('binding');
    $flipkart_link = $request->getParam('flipkart_link');
    $amazon_link = $request->getParam('amazon_link');
    $banner = $request->getParam('banner');

    $sql = "INSERT INTO BOOK (name, author, isbn, publisher, edition, edition_number, no_of_pages, binding, flipkart_link, amazon_link, banner) VALUES (:name, :author, :isbn, :publisher, :edition, :edition_number, :no_of_pages, :binding, :flipkart_link, :amazon_link, :banner)";
   
    $stmt = postRequest1($sql);
    if(isset($stmt->statusCode) && isset($stmt->statusMessage))
        return $stmt;
    
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':author', $author);
    $stmt->bindParam(':isbn', $isbn);
    $stmt->bindParam(':publisher', $publisher);
    $stmt->bindParam(':edition', $edition);
    $stmt->bindParam(':edition_number', $edition_number);
    $stmt->bindParam(':no_of_pages', $no_of_pages);
    $stmt->bindParam(':binding', $binding);
    $stmt->bindParam(':flipkart_link', $flipkart_link);
    $stmt->bindParam(':amazon_link', $amazon_link);
    $stmt->bindParam(':banner', $banner);

    return postRequest2($stmt);
});
