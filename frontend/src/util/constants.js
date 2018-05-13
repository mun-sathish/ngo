export  const ACTION = {
    USER_LOGIN : "user_login",
    SQ : "security_question",
    SQ_ADD: "security_question_add",
    SQ_UPDATE: "security_question_update",
    SQ_DELETE: "security_question_delete",
}

const BASE_URI = "http://ngo.com"
export const REQ = {
    USER_LOGIN : {
        URI: BASE_URI + "/user/signin",
        METHOD : "post"
    },
    ADD_BOOK : {
        URI: BASE_URI + "/resource/book/add",
        METHOD : "post"
    },
    ADD_AUDIO: {
        URI: BASE_URI + "/resource/audio/add",
        METHOD: "post"
    },
    ADD_VIDEO: {
        URI: BASE_URI + "/resource/video/add",
        METHOD: "post"
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
