import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import dispatchHandler from '../middleware/dispatchHandler'
import { userLoginDetails } from '../reducer/userLoginReducer'
import { securityQuestionReducer} from '../reducer/securityQuestionReducer'

const store = createStore(combineReducers({
    userLoginDetails,
    securityQuestionReducer
}), applyMiddleware(dispatchHandler, thunk))
export default store;