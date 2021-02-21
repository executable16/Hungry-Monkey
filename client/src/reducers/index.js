import {combineReducers} from 'redux'
import authReducer from './authReducer'


/*
Don't create more than one store in an application! 
Instead, use combineReducers to create a single root reducer out of many.
*/
export default combineReducers({
    auth : authReducer,
})