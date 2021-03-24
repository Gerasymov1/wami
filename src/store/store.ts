import {createStore, applyMiddleware, combineReducers} from 'redux';
import logger from 'redux-logger'
import postListReducer from "./reducer";
import thunk from 'redux-thunk'

const reducer = combineReducers({
    postListReducer: postListReducer
})

const store = createStore(reducer, applyMiddleware(logger, thunk))

export type IRootStore = ReturnType<typeof reducer>

export default store