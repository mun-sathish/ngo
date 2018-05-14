import sendReq from '../util/httpRequest'
import {ACTION, REQ} from '../util/constants'

const dispatchHandler = store => next => action => {
    // console.log("pre dispatch: " + action);
    switch (action.type) {
        case ACTION.USER_LOGIN:
            sendReq(REQ.USER_LOGIN.URI, REQ.USER_LOGIN.METHOD, action.payload)
            .then((jsonResponse) => {
                    action.payload = jsonResponse;
                    return next(action);
                });
                break;

                // RESOURCES
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

            case ACTION.VIDEO_ADD:
                sendReq(REQ.VIDEO_ADD.URI, REQ.VIDEO_ADD.METHOD, action.payload)
                    .then(jsonResponse => {
                        return next(action)
                    })
            break;

        case ACTION.BOOK:
            sendReq(REQ.BOOK_ALL.URI, REQ.BOOK_ALL.METHOD, null)
                .then(jsonResponse => {
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
                    return next(action)
                })
                break;
            
        case ACTION.SQ_DELETE:
            sendReq(REQ.SQ_DELETE.URI + action.payload, REQ.SQ_DELETE.METHOD, null)
                .then(jsonResponse => {
                    return next(action)
                })
            break;
            default:
    }

    // let ret = next(action);
    // console.log(action)
    // return ret;
};
export default dispatchHandler;