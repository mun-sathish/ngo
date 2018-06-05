import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import dispatchHandler from '../middleware/dispatchHandler'
import { userLoginDetails } from '../reducer/userLoginReducer'
import { securityQuestionReducer} from '../reducer/securityQuestionReducer'
import {booksReducer} from '../reducer/booksReducer'
import {audioReducer} from '../reducer/audioReducer'
import {videoReducer} from '../reducer/videoReducer'

const store = createStore(combineReducers({
    userLoginDetails,
    securityQuestionReducer,
    booksReducer,
    audioReducer,
    videoReducer
}), applyMiddleware(dispatchHandler, thunk))
export default store;