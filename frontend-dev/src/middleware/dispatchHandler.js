import sendReq from '../util/httpRequest'
import { ACTION, REQ } from '../util/Constant'
import { loginActions } from '../action';

const dispatchHandler = store => next => action => {
    switch (action.type) {

        case ACTION.LOGOUT:
            return next(action);

        case ACTION.LOGIN_SUCCESS:
            return next(action);

        case ACTION.LOGIN_FAILURE:
            return next(action);

        case ACTION.LOGIN_REQUEST:
            sendReq(REQ.ADMIN_LOGIN.URI, REQ.ADMIN_LOGIN.METHOD, action.payload)
                .then((jsonResponse) => {
                    store.dispatch(loginActions.loginSuccess(jsonResponse))
                }).catch((err) => {
                    store.dispatch(loginActions.loginFailure())
                });
            return next(action);


        // RESOURCES
        case ACTION.USER_UPDATE_PREMIUM:
            sendReq(REQ.USER_UPDATE_PREMIUM.URI, REQ.USER_UPDATE_PREMIUM.METHOD, action.payload)
                .then(jsonResponse => {
                    sendReq(REQ.USER_ALL.URI, REQ.USER_ALL.METHOD, null)
                        .then(jsonResponse => {
                            action.type = ACTION.USER
                            action.payload = jsonResponse
                            return next(action)
                        })
                })
            break;

        case ACTION.BOOK_UPDATE:
            sendReq(REQ.BOOK_UPDATE.URI, REQ.BOOK_UPDATE.METHOD, action.payload)
                .then(jsonResponse => {
                    sendReq(REQ.BOOK_ALL.URI, REQ.BOOK_ALL.METHOD, null)
                        .then(jsonResponse => {
                            action.type = ACTION.BOOK
                            action.payload = jsonResponse
                            return next(action)
                        })
                })
            break;

        case ACTION.AUDIO_UPDATE:
            sendReq(REQ.AUDIO_UPDATE.URI, REQ.AUDIO_UPDATE.METHOD, action.payload)
                .then(jsonResponse => {
                    sendReq(REQ.AUDIO_ALL.URI, REQ.AUDIO_ALL.METHOD, null)
                        .then(jsonResponse => {
                            action.type = ACTION.AUDIO
                            action.payload = jsonResponse
                            return next(action)
                        })
                })
            break;

        case ACTION.VIDEO_UPDATE:
            sendReq(REQ.VIDEO_UPDATE.URI, REQ.VIDEO_UPDATE.METHOD, action.payload)
                .then(jsonResponse => {
                    sendReq(REQ.VIDEO_ALL.URI, REQ.VIDEO_ALL.METHOD, null)
                        .then(jsonResponse => {
                            action.type = ACTION.VIDEO
                            action.payload = jsonResponse
                            return next(action)
                        })
                })

            break;

        case ACTION.USER_DELETE:
            sendReq(REQ.USER_DELETE.URI, REQ.USER_DELETE.METHOD, action.payload)
                .then(jsonResponse => {
                    sendReq(REQ.USER_ALL.URI, REQ.USER_ALL.METHOD, null)
                        .then(jsonResponse => {
                            action.type = ACTION.USER
                            action.payload = jsonResponse
                            return next(action)
                        })
                })
            break;

        case ACTION.BOOK_DELETE:
            sendReq(REQ.BOOK_DELETE.URI, REQ.BOOK_DELETE.METHOD, action.payload)
                .then(jsonResponse => {
                    sendReq(REQ.BOOK_ALL.URI, REQ.BOOK_ALL.METHOD, null)
                        .then(jsonResponse => {
                            action.type = ACTION.BOOK
                            action.payload = jsonResponse
                            return next(action)
                        })
                })
            break;

        case ACTION.AUDIO_DELETE:
            sendReq(REQ.AUDIO_DELETE.URI, REQ.AUDIO_DELETE.METHOD, action.payload)
                .then(jsonResponse => {
                    sendReq(REQ.AUDIO_ALL.URI, REQ.AUDIO_ALL.METHOD, null)
                        .then(jsonResponse => {
                            action.type = ACTION.AUDIO
                            action.payload = jsonResponse
                            return next(action)
                        })
                })
            break;

        case ACTION.TASK_DELETE:
            sendReq(REQ.TASK_DELETE.URI, REQ.TASK_DELETE.METHOD, action.payload)
                .then(jsonResponse => {
                    sendReq(REQ.TASK_ALL.URI, REQ.TASK_ALL.METHOD, null)
                        .then(jsonResponse => {
                            action.type = ACTION.TASK
                            action.payload = jsonResponse
                            return next(action)
                        })
                })
            break;

        case ACTION.VIDEO_DELETE:
            sendReq(REQ.VIDEO_DELETE.URI, REQ.VIDEO_DELETE.METHOD, action.payload)
                .then(jsonResponse => {
                    sendReq(REQ.VIDEO_ALL.URI, REQ.VIDEO_ALL.METHOD, null)
                        .then(jsonResponse => {
                            action.type = ACTION.VIDEO
                            action.payload = jsonResponse
                            return next(action)
                        })
                })
            break;

        case ACTION.BOOK_ADD:
            sendReq(REQ.BOOK_ADD.URI, REQ.BOOK_ADD.METHOD, action.payload)
                .then(jsonResponse => {
                    return next(action)
                })
            break;

        case ACTION.AUDIO_ADD:
            sendReq(REQ.AUDIO_ADD.URI, REQ.AUDIO_ADD.METHOD, action.payload)
                .then(jsonResponse => {
                    return next(action)
                })
            break;

        case ACTION.TASK_ADD:
            sendReq(REQ.TASK_ADD.URI, REQ.TASK_ADD.METHOD, action.payload)
                .then(jsonResponse => {
                    return next(action)
                })
            break;

        case ACTION.VIDEO_ADD:
            sendReq(REQ.VIDEO_ADD.URI, REQ.VIDEO_ADD.METHOD, action.payload)
                .then(jsonResponse => {
                    return next(action)
                })
            break;

        case ACTION.USER:
            sendReq(REQ.USER_ALL.URI, REQ.USER_ALL.METHOD, null)
                .then(jsonResponse => {
                    action.payload = jsonResponse
                    return next(action)
                })
            break;

        case ACTION.BOOK:
            sendReq(REQ.BOOK_ALL.URI, REQ.BOOK_ALL.METHOD, null)
                .then(jsonResponse => {
                    console.log(jsonResponse)
                    action.payload = jsonResponse
                    return next(action)
                })
            break;

        case ACTION.AUDIO:
            sendReq(REQ.AUDIO_ALL.URI, REQ.AUDIO_ALL.METHOD, null)
                .then(jsonResponse => {
                    action.payload = jsonResponse
                    return next(action)
                })
            break;

        case ACTION.TASK:
            sendReq(REQ.TASK_ALL.URI, REQ.TASK_ALL.METHOD, null)
                .then(jsonResponse => {
                    action.payload = jsonResponse
                    return next(action)
                })
            break;

        case ACTION.VIDEO:
            sendReq(REQ.VIDEO_ALL.URI, REQ.VIDEO_ALL.METHOD, null)
                .then(jsonResponse => {
                    action.payload = jsonResponse
                    return next(action)
                })
            break;

        // SECUIRTY_QUESTION
        case ACTION.SQ:
            sendReq(REQ.SQ_ALL.URI, REQ.SQ_ALL.METHOD, null)
                .then(jsonResponse => {
                    action.payload = jsonResponse;
                    return next(action);
                })
            break;

        case ACTION.SQ_ADD:
            sendReq(REQ.SQ_ADD.URI, REQ.SQ_ADD.METHOD, action.payload)
                .then(jsonResponse => {
                    sendReq(REQ.SQ_ALL.URI, REQ.SQ_ALL.METHOD, null)
                        .then(jsonResponse => {
                            action.type = ACTION.SQ
                            action.payload = jsonResponse
                            return next(action)
                        })
                })
            break;

        case ACTION.SQ_DELETE:
            sendReq(REQ.SQ_DELETE.URI, REQ.SQ_DELETE.METHOD, action.payload)
                .then(jsonResponse => {
                    sendReq(REQ.SQ_ALL.URI, REQ.SQ_ALL.METHOD, null)
                        .then(jsonResponse => {
                            action.type = ACTION.SQ
                            action.payload = jsonResponse
                            return next(action)
                        })
                })
            break;
        default:
    }

    // let ret = next(action);
    // console.log(action)
    // return ret;
};
export default dispatchHandler;