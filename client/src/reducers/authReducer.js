// eslint-disable-next-line import/no-anonymous-default-export


import {FETCH_USER} from '../actions/types'

/*
By default we return null, saying we don't have any idea
whether user is logged in or not 
*/

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = null, action) {
    switch(action.type){
        case FETCH_USER :
            return action.payload || false;
        default : 
            return state;
    }
}