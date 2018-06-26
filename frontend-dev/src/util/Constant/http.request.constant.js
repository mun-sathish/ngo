const BASE_URI = "http://awakenyourselfwithinyou.org/ngo/backend/public/api"
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
    TASK_DELETE: {
        URI: BASE_URI + "/resource/task/delete",
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
    TASK_ADD: {
        URI: BASE_URI + "/resource/task/add",
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
    TASK_ALL: {
        URI: BASE_URI + "/resource/task",
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
        URI: BASE_URI + "/security-question/delete",
        METHOD: "post"
    }
}