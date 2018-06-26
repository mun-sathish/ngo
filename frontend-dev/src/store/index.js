import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import dispatchHandler from '../middleware/dispatchHandler'
import  rootReducer  from '../reducer'

const store = createStore(rootReducer, applyMiddleware(dispatchHandler, thunk))
export default store;