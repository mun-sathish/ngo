<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use Slim\Http\UploadedFile;
require '../src/util/pathVariables.php';

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
                    return "{}";
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
            return showOutput(STATUS::$_C_SUCCESS, STATUS::$_M_SUCCESS_ADDED);
        } catch(PDOException $e){
            return showOutput(STATUS::$_C_PDOEXCEPTION, STATUS::$_M_PDOEXCEPTION . $e->getMessage());
        }
}

function deleteRequest($sql)
{
    try{
            // Get DB Object
            $db = new databaseConnector();
            // Connect
            $db = $db->connect();

            $stmt = $db->prepare($sql);

            $stmt->execute();
            return showOutput(STATUS::$_C_SUCCESS, STATUS::$_M_SUCCESS_DELETE);
        
        } catch(PDOException $e){
            return showOutput(STATUS::$_C_PDOEXCEPTION, STATUS::$_M_PDOEXCEPTION . $e->getMessage());
        }
}


function updateRequest($sql, $file, $banner)
{
    try{
            // Get DB Object
            $db = new databaseConnector();
            // Connect
            $db = $db->connect();

            $stmt = $db->prepare($sql);
            if(isset($file))
                $stmt->bindParam(':file', $file);
            if(isset($banner))
                $stmt->bindParam(':banner', $banner);
            $stmt->execute();
            return showOutput(STATUS::$_C_SUCCESS, STATUS::$_M_SUCCESS_UPDATED);
        
        } catch(PDOException $e){
            return showOutput(STATUS::$_C_PDOEXCEPTION, STATUS::$_M_PDOEXCEPTION . $e->getMessage());
        }
}


// Get All Books
$app->get('/api/resource/book', function(Request $request, Response $response){
    $sql = "SELECT * FROM BOOK";
    return getRequest($sql, false);
});

// Get All Video
$app->get('/api/resource/video', function(Request $request, Response $response){
    $sql = "SELECT video.*, video_blob.file
                FROM video
                INNER JOIN video_blob ON video.video_id=video_blob.video_id";
    
    return getRequest($sql, false);
});

// Get All Video for ADMIN
$app->get('/api/resource/video/admin', function(Request $request, Response $response){
    $sql = "SELECT video.*, video_blob.file
                FROM video
                LEFT OUTER JOIN video_blob ON video.video_id=video_blob.video_id";
    
    return getRequest($sql, false);
});

// Get All Audio
$app->get('/api/resource/audio', function(Request $request, Response $response){
    $sql = "SELECT audio.*, audio_blob.file
                FROM audio
                INNER JOIN audio_blob ON audio.audio_id=audio_blob.audio_id";
    return getRequest($sql, false);
});

// Get All Audio for ADMIN
$app->get('/api/resource/audio/admin', function(Request $request, Response $response){
    $sql = "SELECT audio.*, audio_blob.file
                FROM audio
                LEFT OUTER JOIN audio_blob ON audio.audio_id=audio_blob.audio_id";
    return getRequest($sql, false);
});

// Get Book By ID
$app->get('/api/resource/book/{id}', function(Request $request, Response $response){
    $id = $request->getAttribute('id');
    $sql = "SELECT * FROM BOOK WHERE book_id = $id";
    return getRequest($sql, true);
});

// Get Video By ID
$app->get('/api/resource/video/{id}', function(Request $request, Response $response){
    $id = $request->getAttribute('id');
    $sql = "SELECT * FROM VIDEO WHERE video_id = $id";
    return getRequest($sql, true);
});

// Get Video Blob By ID
$app->get('/api/resource/video/blob/{id}', function(Request $request, Response $response){
    $id = $request->getAttribute('id');
    $sql = "SELECT video_blob.file
                FROM video
                INNER JOIN video_blob ON video.video_id=video_blob.video_id
                WHERE video_blob.video_id = $id";
    return getRequest($sql, true);
});

// Get Audio By ID
$app->get('/api/resource/audio/{id}', function(Request $request, Response $response){
    $id = $request->getAttribute('id');
    $sql = "SELECT * FROM AUDIO WHERE audio_id = $id";
    return getRequest($sql, true);
});

// Get Audio Blob By ID
$app->get('/api/resource/audio/blob/{id}', function(Request $request, Response $response){
    $id = $request->getAttribute('id');
    $sql = "SELECT audio_blob.file
                FROM audio
                INNER JOIN audio_blob ON audio.audio_id=audio_blob.audio_id
                WHERE audio_blob.audio_id = $id";
    return getRequest($sql, true);
});

// Adding Audio
$app->post('/api/resource/audio/add', function(Request $request, Response $response){
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

    $sql1 = "INSERT INTO AUDIO (title, author, genre, speaker, price, discount, is_premium, is_free, banner) VALUES (:title, :author, :genre, :speaker, :price, :discount, :is_premium, :is_free, :banner)  ";

    $sql2 = "INSERT INTO AUDIO_BLOB (audio_id, file) VALUES (:audio_id, :file)";
   

    try{
            // Get DB Object
            $db = new databaseConnector();
            // Connect
            $db = $db->connect();

            $stmt = $db->prepare($sql1);

            $stmt->bindParam(':title', $title);
            $stmt->bindParam(':author', $author);
            $stmt->bindParam(':genre', $genre);
            $stmt->bindParam(':speaker', $speaker);
            $stmt->bindParam(':price', $price);
            $stmt->bindParam(':discount', $discount);
            $stmt->bindParam(':is_premium', $is_premium);
            $stmt->bindParam(':is_free', $is_free);
            $stmt->bindParam(':banner', $banner);

            $stmt->execute();

            $stmt = $db->prepare($sql2);
            $resId = $db->lastInsertId();
            $stmt->bindParam(':audio_id', $resId);
            $stmt->bindParam(':file', $file);
            $stmt->execute();

            return showOutput(STATUS::$_C_SUCCESS, STATUS::$_M_SUCCESS_ADDED);

        } catch(PDOException $e){
            return showOutput(STATUS::$_C_PDOEXCEPTION, STATUS::$_M_PDOEXCEPTION . $e->getMessage());
        }
});

// Adding Video
$app->post('/api/resource/video/add', function(Request $request, Response $response){
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

    $sql1 = "INSERT INTO VIDEO (title, author, cast, genre, price, discount, is_premium, is_free, banner) VALUES (:title, :author, :cast, :genre, :price, :discount, :is_premium, :is_free, :banner)";

    $sql2 = "INSERT INTO VIDEO_BLOB (video_id, file) VALUES (:video_id, :file)";

    try{
            // Get DB Object
            $db = new databaseConnector();
            // Connect
            $db = $db->connect();

            $stmt = $db->prepare($sql1);
    
            $stmt->bindParam(':title', $title);
            $stmt->bindParam(':author', $author);
            $stmt->bindParam(':genre', $genre);
            $stmt->bindParam(':cast', $cast);
            $stmt->bindParam(':price', $price);
            $stmt->bindParam(':discount', $discount);
            $stmt->bindParam(':is_premium', $is_premium);
            $stmt->bindParam(':is_free', $is_free);
            $stmt->bindParam(':banner', $banner);

            $stmt->execute();
            $resId = $db->lastInsertId();

            $stmt = $db->prepare($sql2);
            $stmt->bindParam(':video_id', $resId);
            $stmt->bindParam(':file', $file);
            $stmt->execute();

            return showOutput(STATUS::$_C_SUCCESS, STATUS::$_M_SUCCESS_ADDED);

        } catch(PDOException $e){
            return showOutput(STATUS::$_C_PDOEXCEPTION, STATUS::$_M_PDOEXCEPTION . $e->getMessage());
        }

});

// Adding Book
$app->post('/api/resource/book/add', function(Request $request, Response $response){
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


// Delete Book By ID
$app->post('/api/resource/book/delete', function(Request $request, Response $response){
    $id = $request->getParam('book_id');
    $sql = "DELETE FROM BOOK WHERE book_id = $id";
    return deleteRequest($sql);
});

// Delete Audio By ID
$app->post('/api/resource/audio/delete', function(Request $request, Response $response){
    $id = $request->getParam('audio_id');
    $sql = "DELETE FROM AUDIO_BLOB WHERE audio_id = $id";
    return deleteRequest($sql);
});

// Delete Video By ID
$app->post('/api/resource/video/delete', function(Request $request, Response $response){
    $id = $request->getParam('video_id');
    $sql = "DELETE FROM VIDEO WHERE video_id = $id";
    return deleteRequest($sql);
});

// Update Video By ID
$app->post('/api/resource/video/update', function(Request $request, Response $response){
    $id = $request->getParam('video_id');
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

    $updateStr = null;
    if(!isset($id))
        return showOutput(STATUS::$_C_RESOURCE_INPUT_UNAVAILABLE, STATUS::$_M_INPUT_UNAVAILABLE);

    if(isset($title))
        $updateStr .= "title = '$title',";
    if(isset($author))
        $updateStr .= "author = '$author',";
    if(isset($genre))
        $updateStr .= "genre = '$genre',";
    if(isset($cast))
        $updateStr .= "cast = '$cast',";
    if(isset($is_free))
        $updateStr .= "is_free = '$is_free',";
    if(isset($price))
        $updateStr .= "price = $price,";
    if(isset($discount))
        $updateStr .= "discount = $discount,";
    if(isset($is_premium))
        $updateStr .= "is_premium = '$is_premium',";
    if(isset($banner))
        $updateStr .= "banner = :banner,";
    if(isset($updateStr))
        $updateStr = substr($updateStr, 0, -1);

    $sql = "UPDATE  VIDEO 
                SET $updateStr 
                WHERE video_id = $id";
    $sql2 = "UPDATE  VIDEO_BLOB 
                SET file = :file  
                WHERE video_id = $id";
    

// return showOutput(STATUS::$_C_RESOURCE_INPUT_UNAVAILABLE, __DIR__);
if (isset($file)) {
    if (!is_dir(PATH::$BASE_PATH)) {
        mkdir(PATH::$BASE_PATH);
        if(!is_dir(PATH::$BASE_PATH))
            return showOutput(STATUS::$_C_RESOURCE_INPUT_UNAVAILABLE, "cant create folder");
    }
    
        $basename = bin2hex(random_bytes(8)); // see http://php.net/manual/en/function.random-bytes.php
        $filename = sprintf('%s.%0.8s', $basename, "mp4");
        file_put_contents(PATH::$BASE_PATH, $file);
    //    $filename  = moveUploadedFile(PATH::$VIDEO_FILE, $file);
        return showOutput(STATUS::$_C_RESOURCE_INPUT_UNAVAILABLE, $filename);
    }
    return showOutput(STATUS::$_C_RESOURCE_INPUT_UNAVAILABLE, "filename");

    $obj = json_decode(updateRequest($sql, null, $banner));
    if( ($obj->statusCode === 0 && isset($file)) || ($obj->statusCode !== 0 && !isset($updateStr) && isset($file) ) )  {
        
        return updateRequest($sql2, $file, null);
    }
    else 
        return json_encode($obj);
});

$app->post('/api/resource/audio/update', function(Request $request, Response $response){
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

    $updateStr = "";
    if(!isset($id))
        return showOutput(STATUS::$_C_RESOURCE_INPUT_UNAVAILABLE, STATUS::$_M_INPUT_UNAVAILABLE);

    if(isset($title))
        $updateStr .= "title = '$title',";
    if(isset($author))
        $updateStr .= "author = '$author',";
    if(isset($genre))
        $updateStr .= "genre = '$genre',";
    if(isset($speaker))
        $updateStr .= "cast = '$speaker',";
    if(isset($is_free))
        $updateStr .= "is_free = '$is_free',";
    if(isset($price))
        $updateStr .= "price = $price,";
    if(isset($discount))
        $updateStr .= "discount = $discount,";
    if(isset($is_premium))
        $updateStr .= "is_premium = '$is_premium',";
    if(isset($banner))
        $updateStr .= "banner = :banner,";
    
    $updateStr = substr($updateStr, 0, -1);
    $sql = "UPDATE  AUDIO 
                SET $updateStr 
                WHERE audio_id = $id";
    return updateRequest($sql, null, $banner);
});

/**
 * Moves the uploaded file to the upload directory and assigns it a unique name
 * to avoid overwriting an existing uploaded file.
 *
 * @param string $directory directory to which the file is moved
 * @param UploadedFile $uploaded file uploaded file to move
 * @return string filename of moved file
 */
function moveUploadedFile($directory, UploadedFile $uploadedFile)
{
    $extension = pathinfo($uploadedFile->getClientFilename(), PATHINFO_EXTENSION);
    $basename = bin2hex(random_bytes(8)); // see http://php.net/manual/en/function.random-bytes.php
    $filename = sprintf('%s.%0.8s', $basename, $extension);

    $uploadedFile->moveTo($directory . DIRECTORY_SEPARATOR . $filename);

    return $filename;
}