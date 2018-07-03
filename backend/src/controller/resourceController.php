<?php
use Slim\Http\UploadedFile;
use \Psr\Http\Message\ResponseInterface as Response;
use \Psr\Http\Message\ServerRequestInterface as Request;
require '../src/util/pathVariables.php';
require '../src/util/handleRequestUtil.php';


// Get All DB Variables
$app->get('/api/db-variable', function (Request $request, Response $response) {
    $sql = "SELECT *  FROM static_variable";
    return getRequest($sql, false);
});

// Get All Users
$app->get('/api/resource/user', function (Request $request, Response $response) {
    $sql = "SELECT username, name, phone, email, is_premium, premium_expiry_timestamp  FROM user_login";
    return getRequest($sql, false);
});

// Get All Books
$app->get('/api/resource/book', function (Request $request, Response $response) {
    $sql = "SELECT * FROM book";
    return getRequest($sql, false);
});

// Get All Video
$app->get('/api/resource/video', function (Request $request, Response $response) {
    $sql = "SELECT * FROM video";
    return getRequest($sql, false);
});

// Get All Audio
$app->get('/api/resource/audio', function (Request $request, Response $response) {
    $sql = "SELECT * FROM audio";
    return getRequest($sql, false);
});

// Get All Task
$app->get('/api/resource/task', function (Request $request, Response $response) {
    $sql = "SELECT * FROM task";
    return getRequest($sql, false);
});

// Get Book By ID
$app->get('/api/resource/book/{id}', function (Request $request, Response $response) {
    $id = $request->getAttribute('id');
    $sql = "SELECT * FROM book WHERE book_id = $id";
    return getRequest($sql, true);
});

// Get Video By ID
$app->get('/api/resource/video/{id}', function (Request $request, Response $response) {
    $id = $request->getAttribute('id');
    $sql = "SELECT * FROM video WHERE video_id = $id";
    return getRequest($sql, true);
});

// Get Audio By ID
$app->get('/api/resource/audio/{id}', function (Request $request, Response $response) {
    $id = $request->getAttribute('id');
    $sql = "SELECT * FROM audio WHERE audio_id = $id";
    return getRequest($sql, true);
});

// Get Task By ID
$app->get('/api/resource/task/{id}', function (Request $request, Response $response) {
    $id = $request->getAttribute('id');
    $sql = "SELECT * FROM task WHERE task_id = $id";
    return getRequest($sql, true);
});

// Adding Audio
$app->post('/api/resource/audio/add', function (Request $request, Response $response) {

    $title = $request->getParam('title');
    $author = $request->getParam('author');
    $genre = $request->getParam('genre');
    $speaker = $request->getParam('speaker');
    $is_premium = $request->getParam('is_premium');
    $uploadedFiles = $request->getUploadedFiles();

    try {
        if (!empty($uploadedFiles['banner']) && !empty($uploadedFiles['file'])) {
            $uploadedBanner = $uploadedFiles['banner'];
            $uploadedFile = $uploadedFiles['file'];
            if ($uploadedBanner->getError() === UPLOAD_ERR_OK
                && $uploadedFile->getError() === UPLOAD_ERR_OK) {
                $bannername = moveUploadedFile(PATH::$BASE_PATH . PATH::$AUDIO_BANNER, $uploadedBanner);
                $filename = moveUploadedFile(PATH::$BASE_PATH . PATH::$AUDIO_FILE, $uploadedFile);

                $sql = "INSERT INTO audio (title, author, speaker, genre,  is_premium, banner, file) VALUES ('$title', '$author', '$speaker', '$genre', '$is_premium', '$bannername', '$filename')";

                return postRequest($sql, STATUS::$_M_SUCCESS_ADDED);
            }
        }
    } catch (Exception $e) {
        return showOutput(STATUS::$_C_GENERAL_EXCEPTION, STATUS::$_M_GENERAL_EXCEPTION . $e->getMessage());
    }
    return showOutput(STATUS::$_C_RESOURCE_INPUT_UNAVAILABLE, STATUS::$_M_INPUT_UNAVAILABLE);
});


// Adding Video
$app->post('/api/resource/video/add', function (Request $request, Response $response) {

    $title = $request->getParam('title');
    $author = $request->getParam('author');
    $genre = $request->getParam('genre');
    $cast = $request->getParam('cast');
    $is_premium = $request->getParam('is_premium');
    $uploadedFiles = $request->getUploadedFiles();

    try {
        if (!empty($uploadedFiles['banner']) && !empty($uploadedFiles['file'])) {
            $uploadedBanner = $uploadedFiles['banner'];
            $uploadedFile = $uploadedFiles['file'];
            if ($uploadedBanner->getError() === UPLOAD_ERR_OK
                && $uploadedFile->getError() === UPLOAD_ERR_OK) {
                $bannername = moveUploadedFile(PATH::$BASE_PATH . PATH::$VIDEO_BANNER, $uploadedBanner);
                $filename = moveUploadedFile(PATH::$BASE_PATH . PATH::$VIDEO_FILE, $uploadedFile);

                $sql = "INSERT INTO video (title, author, genre, cast,  is_premium, banner, file) VALUES ('$title', '$author', '$genre', '$cast', '$is_premium', '$bannername', '$filename')";

                return postRequest($sql, STATUS::$_M_SUCCESS_ADDED);
            }
        }
    } catch (Exception $e) {
        return showOutput(STATUS::$_C_GENERAL_EXCEPTION, STATUS::$_M_GENERAL_EXCEPTION . $e->getMessage());
    }
    return showOutput(STATUS::$_C_RESOURCE_INPUT_UNAVAILABLE, STATUS::$_M_INPUT_UNAVAILABLE);
});

// Adding Book
$app->post('/api/resource/book/add', function (Request $request, Response $response) {

    $name = $request->getParam('name');
    $author = $request->getParam('author');
    $genre = $request->getParam('genre');
    $no_of_pages = $request->getParam('no_of_pages');
    $uploadedFiles = $request->getUploadedFiles();

    
    try {
        if (!empty($uploadedFiles['banner'])  && !empty($uploadedFiles['file'])) {
            $uploadedBanner = $uploadedFiles['banner'];
            $uploadedFile = $uploadedFiles['file'];
            if ($uploadedBanner->getError() === UPLOAD_ERR_OK
            && $uploadedFile->getError() === UPLOAD_ERR_OK) {
                $bannername = moveUploadedFile(PATH::$BASE_PATH . PATH::$BOOK_BANNER, $uploadedBanner);
                $filename = moveUploadedFile(PATH::$BASE_PATH . PATH::$BOOK_FILE, $uploadedFile);

                $sql = "INSERT INTO book (name, author, genre, no_of_pages, banner, file) VALUES ('$name',  '$author',  '$genre',  '$no_of_pages',  '$bannername', '$filename')";

                return postRequest($sql, STATUS::$_M_SUCCESS_ADDED);
            }
        }
    } catch (Exception $e) {
        return showOutput(STATUS::$_C_GENERAL_EXCEPTION, STATUS::$_M_GENERAL_EXCEPTION . $e->getMessage());
    }
    return showOutput(STATUS::$_C_RESOURCE_INPUT_UNAVAILABLE, STATUS::$_M_INPUT_UNAVAILABLE);
});

// Adding Task
$app->post('/api/resource/task/add', function (Request $request, Response $response) {

    $title = $request->getParam('title');
    $description = $request->getParam('description');
    $is_premium = $request->getParam('is_premium');
    $uploadedFiles = $request->getUploadedFiles();

    try {
        if (!empty($uploadedFiles['file'])) {
            $finalFileName = "";
            $isFileAdded = false;
            foreach ($uploadedFiles['file'] as $uploadedFile) {
                if ($uploadedFile->getError() === UPLOAD_ERR_OK) {
                    $filename = moveUploadedFile(PATH::$BASE_PATH . PATH::$TASK_FILE, $uploadedFile);
                    $finalFileName = $finalFileName . $filename . ",";
                    $isFileAdded = true;
                }
            }
            if($isFileAdded){
                $finalFileName = substr($finalFileName, 0, -1);
            }

            $sql = "INSERT INTO task (title, description, is_premium, file) VALUES ('$title', '$description', '$is_premium', '$finalFileName')";

            return postRequest($sql, STATUS::$_M_SUCCESS_ADDED);
        }
    } catch (Exception $e) {
        return showOutput(STATUS::$_C_GENERAL_EXCEPTION, STATUS::$_M_GENERAL_EXCEPTION . $e->getMessage());
    }
    return showOutput(STATUS::$_C_RESOURCE_INPUT_UNAVAILABLE, STATUS::$_M_INPUT_UNAVAILABLE);
});

// Delete User By Username
$app->post('/api/resource/user/delete', function (Request $request, Response $response) {
    $username = $request->getParam('username');
    
    $sql = "DELETE FROM user_login WHERE username = '$username'";
    return postRequest($sql, STATUS::$_M_SUCCESS_DELETE);
});

// Delete Audio By ID
$app->post('/api/resource/audio/delete', function (Request $request, Response $response) {
    $id = $request->getParam('audio_id');
    $banner = $request->getParam('banner');
    $file = $request->getParam('file');

    $banner = PATH::$BASE_PATH . PATH::$AUDIO_BANNER . PATH::$SLASH . $banner;
    $file = PATH::$BASE_PATH . PATH::$AUDIO_FILE . PATH::$SLASH . $file;

    if(file_exists($banner))
        unlink($banner);
    if(file_exists($file))
        unlink($file);
    
    $sql = "DELETE FROM audio WHERE audio_id = $id";
    return postRequest($sql, STATUS::$_M_SUCCESS_DELETE);
});

// Delete Video By ID
$app->post('/api/resource/video/delete', function (Request $request, Response $response) {
    $id = $request->getParam('video_id');
    $banner = $request->getParam('banner');
    $file = $request->getParam('file');

    $banner = PATH::$BASE_PATH . PATH::$VIDEO_BANNER . PATH::$SLASH . $banner;
    $file = PATH::$BASE_PATH . PATH::$VIDEO_FILE . PATH::$SLASH . $file;

    if(file_exists($banner))
        unlink($banner);
    if(file_exists($file))
        unlink($file);

    $sql = "DELETE FROM video WHERE video_id = $id";
    return postRequest($sql, STATUS::$_M_SUCCESS_DELETE);
});

// Delete Book By ID
$app->post('/api/resource/book/delete', function (Request $request, Response $response) {
    $id = $request->getParam('book_id');
    $banner = $request->getParam('banner');
    $file = $request->getParam('file');

    $banner = PATH::$BASE_PATH . PATH::$BOOK_BANNER . PATH::$SLASH . $banner;
    $file = PATH::$BASE_PATH . PATH::$BOOK_FILE . PATH::$SLASH . $file;

    if(file_exists($banner))
        unlink($banner);
    if(file_exists($file))
        unlink($file);

    $sql = "DELETE FROM book WHERE book_id = $id";
    return postRequest($sql, STATUS::$_M_SUCCESS_DELETE);
});

// Delete Task By ID
$app->post('/api/resource/task/delete', function (Request $request, Response $response) {
    $id = $request->getParam('task_id');
    $finalFileName = $request->getParam('file');

    $fileNames = explode(",",$finalFileName);
    foreach ($fileNames as $file) {
        $file = PATH::$BASE_PATH . PATH::$TASK_FILE . PATH::$SLASH . $file;
        if(file_exists($file))
            unlink($file);
    }
    
    $sql = "DELETE FROM task WHERE task_id = $id";
    return postRequest($sql, STATUS::$_M_SUCCESS_DELETE);
});

// Update User Premium
$app->post('/api/resource/user/premium-update', function (Request $request, Response $response) {
    date_default_timezone_set('Asia/Kolkata');
    $username = $request->getParam('username');
    $is_premium = $request->getParam('is_premium');
    $validity = $request->getParam('validity');
    $premium_expiry_timestamp = date("Y-m-d H:i:s", strtotime("0000-00-00"));
    
    if($is_premium == 0){
        $sql = "UPDATE user_login SET is_premium = $is_premium";
    } else if($is_premium == 1) {
        $d=strtotime("+".$validity." Day");
        $premium_expiry_timestamp = date("Y-m-d H:i:s", $d);
    }
    
    $sql = "UPDATE user_login SET is_premium = $is_premium, premium_expiry_timestamp = '$premium_expiry_timestamp' WHERE username = '$username'";
    return postRequest($sql, STATUS::$_M_SUCCESS_UPDATED);
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