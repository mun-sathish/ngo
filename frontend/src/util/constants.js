export  const ACTION = {
    USER_LOGIN : "user_login",
    SQ : "security_question",
    SQ_ADD: "security_question_add",
    SQ_UPDATE: "security_question_update",
    SQ_DELETE: "security_question_delete",

    BOOK_ADD: "books_add",
    BOOK: "books",
    AUDIO_ADD: "audio_add",
    AUDIO: "audio",
    VIDEO_ADD: "video_add",
    VIDEO: "video"
}

const BASE_URI = "http://ngo.com/api"
export const REQ = {
    USER_LOGIN : {
        URI: BASE_URI + "/user/signin",
        METHOD : "post"
    },
    BOOK_ADD : {
        URI: BASE_URI + "/resource/book/add",
        METHOD : "post"
    },
    AUDIO_ADD: {
        URI: BASE_URI + "/resource/audio/add",
        METHOD: "post"
    },
    VIDEO_ADD: {
        URI: BASE_URI + "/resource/video/add",
        METHOD: "post"
    },
    BOOK_ALL : {
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

    SQ_ALL : {
        URI: BASE_URI + "/security-question",
        METHOD: "get"
    },
    SQ_ADD : {
        URI: BASE_URI + "/security-question/add",
        METHOD: "post"
    },
    SQ_DELETE: {
        URI: BASE_URI + "/security-question/delete/",
        METHOD: "post"
    }
}
