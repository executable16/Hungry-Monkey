import axios from 'axios'
import {FETCH_USER} from './types'


/* Dispatch a suitable action according to the requirement */

export const fetchUser = () => {
    return async (dispatch) => {
        try{
            const res = await axios.get('/api/currentuser')
            console.log("Called : Fetch User")
            dispatch({type : FETCH_USER, payload : res.data})
        }catch(err){
            console.log("Dispatching User Authentication info failed")
        }
        
    }
}

export const handleToken = (token) => {
    return async (dispatch) => {
        try{
            const res = await axios.post('/api/stripe',token)
            console.log("Called : Handle Token")
            dispatch({type : FETCH_USER,payload : res.data})
        }catch(err){
            console.log("Dispatching Handle Token Failed")
        }
    }
}

