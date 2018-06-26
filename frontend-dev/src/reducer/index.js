import { combineReducers } from 'redux';
import { UserLoginReducer } from './user-login-reducer'
import { SecurityQuestionReducer} from './security-question-reducer'
import {BookReducer} from './book-reducer'
import {AudioReducer} from './audio-reducer'
import {VideoReducer} from './video-reducer'
import {TaskReducer} from './task-reducer'


const rootReducer = combineReducers({
    UserLoginReducer,
    SecurityQuestionReducer,
    BookReducer,
    AudioReducer,
    VideoReducer,
    TaskReducer
});
     
export default rootReducer;