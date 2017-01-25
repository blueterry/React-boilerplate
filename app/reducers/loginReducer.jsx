//import moment from 'moment';
import {GET_LOCAL_USER, NOT_LOGIN_YET, LOGGED_IN, LOGGING_IN, LOGIN_FAIL} from 'loginActions';

function user(state={
    user:{    
        userId: -1,
        userName:undefined,
        password:undefined,
        loginAt: undefined    
    }
},action){
    //console.log('user-state-action:',state, action);

    switch(action.type){
        case NOT_LOGIN_YET:
            return Object.assign({}, state.user, {                
                userId: -1,
                passwrod: undefined,
                loginAt: undefined
            });
        case LOGGING_IN:
            return Object.assign({}, state.user, { 
                userName: action.userName,
                password: action.password,
                loginAt: undefined,                               
                userId:-1
            });
        case LOGGED_IN:
        case GET_LOCAL_USER:
            return Object.assign({}, state.user, {                
                userId: action.userId,
                userName: action.userName,
                password:action.password,
                loginAt: action.loginAt                
            });
        case LOGIN_FAIL: 
            return Object.assign({}, state.user, { 
                    userId: -1, 
                    userName: action.userName,
                    password:undefined                
            });
        default:
            return state.user
    }
}

export var loginReducer  = (state=[], action) =>{
    switch(action.type){
        case NOT_LOGIN_YET:
        case LOGGED_IN:
        case LOGIN_FAIL:                
        case LOGGING_IN:  
        case GET_LOCAL_USER: 
            //console.log('LOGGING_IN');         
            //console.log('loginReducer: state--action:',state, action);
            
            var userRet= {                
               user: user(state, action)
            };
            //console.log('loginReducer.user:', userRet);
            return userRet.user;
        default:
            return state;
    }
}