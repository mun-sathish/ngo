

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

const BASE_URI = "http://ngo.com/api"
export const REQ = {
    USER_LOGIN: {
        URI: BASE_URI + "/user/signin",
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
        METHOD: "post"
    },
    AUDIO_ADD: {
        URI: BASE_URI + "/resource/audio/add",
        METHOD: "post"
    },
    VIDEO_ADD: {
        URI: BASE_URI + "/resource/video/add",
        METHOD: "post"
    },
    BOOK_ALL: {
        URI: BASE_URI + "/resource/book",
        METHOD: "get"
    },
    AUDIO_ALL: {
        URI: BASE_URI + "/resource/audio/admin",
        METHOD: "get"
    },
    VIDEO_ALL: {
        URI: BASE_URI + "/resource/video/admin",
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
