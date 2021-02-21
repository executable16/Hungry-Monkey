import axios from 'axios'
import {FETCH_USER} from './types'


/* Dispatch a suitable action according to the requirement */

export const fetchUser = () => {
    return async (dispatch) => {
        try{
            const res = await axios.get('/api/currentuser')
            dispatch({type : FETCH_USER, payload : res.data})
        }catch(err){
            console.log("Dispatching User Authentication info failed")
        }
        
    }
}

