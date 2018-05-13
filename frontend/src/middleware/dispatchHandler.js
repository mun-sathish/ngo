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
    console.log(action)
    // return ret;
};
export default dispatchHandler;