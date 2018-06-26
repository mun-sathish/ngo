const BASE = "http://awakenyourselfwithinyou.org/ngo/uploads/blob"

export const BLOB_URI = {
    VIDEO_BANNER: BASE + "/video/banner/",
    VIDEO_FILE: BASE + "/video/file/",
    AUDIO_BANNER: BASE + "/audio/banner/",
    AUDIO_FILE: BASE + "/audio/file/",
    BOOK_BANNER: BASE + "/book/banner/",
    TASK_FILE: BASE + "/task/file/"
}

const BACKEND_BASE_URL = "/ngo/frontend";
export const BACKEND = {
    RESOURCE_URL: BACKEND_BASE_URL,
    LOGIN_URL: BACKEND_BASE_URL + "/login",
    AUDIO_URL: BACKEND_BASE_URL + "/audio",
    VIDEO_URL: BACKEND_BASE_URL + "/video",
    TASK_URL: BACKEND_BASE_URL + "/task",
    BOOK_URL: BACKEND_BASE_URL + "/book",
    SQ_URL: BACKEND_BASE_URL + "/security-question"
}