import axios from 'axios'
import {FETCH_USER, FETCH_SURVEYS} from './types'


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

export const handleToken = (token) => {
    return async (dispatch) => {
        try{
            const res = await axios.post('/api/stripe',token)
            dispatch({type : FETCH_USER,payload : res.data});
        }catch(err){
            console.log("Dispatching Handle Token Failed")
        }
    }
}

export const submitSurvey = (values, history) => {
        return async (dispatch) => {
            try{
                const res = await axios.post('/api/surveys',values);
                history.push('/home')
                dispatch({type : FETCH_USER,payload : res.data});
                
                
            }catch(err){
                console.log("Error at survey submit !")
            }
        }
};

export const fetchSurveys = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get('/api/surveys');
            dispatch({type : FETCH_SURVEYS, payload : res.data});
        }catch(err){
            console.log('Error at fetching surveys (DISPATCHER)');
        }
    }
}

// export const submitSurvey = values => async dispatch => {
//     const res = await axios.post('/api/surveys',values);
//     dispatch({type : FETCH_USER,payload : res.data});
// }
