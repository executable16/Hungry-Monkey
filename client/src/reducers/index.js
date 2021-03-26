import {combineReducers} from 'redux'
import authReducer from './authReducer'
import {reducer as reduxForm} from 'redux-form'

/*
Don't create more than one store in an application! 
Instead, use combineReducers to create a single root reducer out of many.
*/

export default combineReducers({
    auth : authReducer,
    form : reduxForm,
});



