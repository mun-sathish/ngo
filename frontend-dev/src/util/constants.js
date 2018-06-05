

export const ACTION = {
    USER_LOGIN: "user_login",
    SQ: "security_question",
    SQ_ADD: "security_question_add",
    SQ_UPDATE: "security_question_update",
    SQ_DELETE: "security_question_delete",

    BOOK_ADD: "books_add",
    BOOK_DELETE: "books_delete",
    BOOK_UPDATE: "books_update",
    BOOK: "books",
    AUDIO_ADD: "audio_add",
    AUDIO_DELETE: "audio_delete",
    AUDIO_UPDATE: "audio_update",
    AUDIO: "audio",
    VIDEO_ADD: "video_add",
    VIDEO_DELETE: "video_delete",
    VIDEO_UPDATE: "video_update",
    VIDEO: "video"
}

const BASE_URI = "http://awakenyourselfwithinyou.org/ngo/backend/public/api"
const BASE = "http://awakenyourselfwithinyou.org/ngo/uploads/blob"

export const BLOB_URI = {
    VIDEO_BANNER: BASE + "/video/banner/",
    VIDEO_FILE: BASE + "/video/file/",
    AUDIO_BANNER: BASE + "/audio/banner/",
    AUDIO_FILE: BASE + "/audio/file/",
    BOOK_BANNER: BASE + "/book/banner/"
}
export const REQ = {

    USER_LOGIN: {
        URI: BASE_URI + "/user/sign-in",
        METHOD: "post"
    },
    BOOK_UPDATE: {
        URI: BASE_URI + "/resource/book/update",
        METHOD: "post"
    },
    AUDIO_UPDATE: {
        URI: BASE_URI + "/resource/audio/update",
        METHOD: "post"
    },
    VIDEO_UPDATE: {
        URI: BASE_URI + "/resource/video/update",
        METHOD: "post"
    },
    BOOK_DELETE: {
        URI: BASE_URI + "/resource/book/delete",
        METHOD: "post"
    },
    AUDIO_DELETE: {
        URI: BASE_URI + "/resource/audio/delete",
        METHOD: "post"
    },
    VIDEO_DELETE: {
        URI: BASE_URI + "/resource/video/delete",
        METHOD: "post"
    },
    BOOK_ADD: {
        URI: BASE_URI + "/resource/book/add",
        METHOD: "post",
        enctype: "multipart/form-data"
    },
    AUDIO_ADD: {
        URI: BASE_URI + "/resource/audio/add",
        METHOD: "post",
        enctype: "multipart/form-data"
    },
    VIDEO_ADD: {
        URI: BASE_URI + "/resource/video/add",
        METHOD: "post",
        enctype: "multipart/form-data"
    },
    BOOK_ALL: {
        URI: BASE_URI + "/resource/book",
        METHOD: "get"
    },
    AUDIO_ALL: {
        URI: BASE_URI + "/resource/audio",
        METHOD: "get"
    },
    VIDEO_ALL: {
        URI: BASE_URI + "/resource/video",
        METHOD: "get"
    },

    SQ_ALL: {
        URI: BASE_URI + "/security-question",
        METHOD: "get"
    },
    SQ_ADD: {
        URI: BASE_URI + "/security-question/add",
        METHOD: "post"
    },
    SQ_DELETE: {
        URI: BASE_URI + "/security-question/delete/",
        METHOD: "post"
    }
}
