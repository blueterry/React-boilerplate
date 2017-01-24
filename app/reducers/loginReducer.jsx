//import moment from 'moment';
import {NOT_LOGIN_YET, LOGGED_IN, LOGGING_IN, LOGIN_FAIL} from 'loginActions';

function user(state={    
        userId: -1,
        userName:undefined,
        password:undefined    
},action){
    console.log('user-state-action:',state, action);
    switch(action.type){
        case NOT_LOGIN_YET:
            return Object.assign({}, {
                undefined
            });
        case LOGGING_IN:
            return Object.assign({}, state, {
                ...action.user,
                userId:-1                                
            });
        case LOGGED_IN:
            return Object.assign({}, state, {                
                ...action.user                
            });
        case LOGIN_FAIL: 
            return Object.assign({}, state, { 
                    userId: -1, 
                    password:undefined                
            });
        default:
            return state
    }
}

export var loginReducer  = (state=[], action) =>{
    switch(action.type){
        case NOT_LOGIN_YET:
        case LOGGED_IN:
        case LOGIN_FAIL:                
        case LOGGING_IN:   
            //console.log('LOGGING_IN');         
            console.log('loginReducer: state--action:',state, action);
            return Object.assign({}, state, action, {
                "user" : user(state.user, action)
            })
        default:
            return state;
    }
}