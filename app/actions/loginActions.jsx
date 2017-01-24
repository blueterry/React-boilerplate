import fetch from 'isomorphic-fetch';
import moment from 'moment';

import loginAPI from 'loginAPI';

export const NOT_LOGIN_YET = "NOT_LOGIN_YET";
export const LOGGED_IN = "LOGGED_IN";
export const LOGGING_IN = "LOGGING_IN";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const GET_LOCAL_USER = "GET_LOCAL_USER";

//Actions must be pure function...

export var checkLocal = () =>{
    var user = loginAPI.getLocalUser();
    return{
        type: GET_LOCAL_USER,
        loggingIn:false,
        user:{
            password: undefined,
            ...user
        }
    }
}

export var login = (userName, password) =>{
    console.log('login action: userName, password:', userName, password);
    return {
        type: LOGGING_IN,
        user:{
            userName,
            password,
            userId: -1,        
        },
        loggingIn: true
    };

    //return function(dispatch){
    //    return fetch(`http://www.rkete.com:9000/`)
    //}
};

export var loginSuccess = (userId) =>{
    console.log('loginSuccess action:',userId)
    var locUser = loginAPI.getLocalUser();
    return{
        type: LOGGED_IN,
        loggingIn: false,        
        user:{
            ...locUser,            
            userId,
            loginAt: moment().unix()        
        }
    }
};

export var loginFail = (userName)=>{
    console.log('loginFail action:')
    return {
        type: LOGIN_FAIL,
        loggingIn:false,
        user:{
            userId: -1,
            userName,
            password: undefined
        }
    }
}

export var logOut = ()=>{
    console.log('loginOut action:')
    return {
        type: NOT_LOGIN_YET,
        user: undefined,
        loggingIn:false
    }
}

