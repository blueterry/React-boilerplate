import jQuery from 'jquery';
import {login, loginSuccess, loginFail,logOut} from 'loginActions';
import fetch from 'isomorphic-fetch';
import {polyfill} from 'es6-promise';
import fetchMock from 'fetch-mock';

//require('es6-promise').polyfill();
//require('isomorphic-fetch');

export default {
    logOut(){
        var locUser = JSON.parse(localStorage.getItem('user'));
        var theUser = logOut();
        locUser = {
            ...theUser.user,                         
        }
        
        localStorage.setItem('user', JSON.stringify(theUser));
        console.log('localStorage:', localStorage.getItem('user'));
        return theUser;
    },

    getLocalUser(){
        return JSON.parse(localStorage.getItem('user'));
    },
    verifyUser(userName, password){
        //require('es6-promise').polyfill();
        //require('isomorphic-fetch');
        
        var url = new URL('http://www.rkete.com:9000/query/UserMan.asmx/VerifyUser');        
        //polyfill();        
        console.log('1. verify User url, userName, password:', url.toString(), userName, password);

        return dispatch =>{
            console.log('dispatching....');
            dispatch(login(userName,password));
            //fetchMock.get('*', {userId: 1});
            var res = fetch(url,{
                method: 'POST',
                headers:{
                    "Content-type": "application/x-www-form-urlencoded",
                    "Accept": "application/json"
                },
                body:"userName=" + userName + "&password=" + password + "&deviceId=react"
            })
            .then((abc)=>abc.json())
            .then(json=>{
                var userId = parseInt(json);
                console.log('3. json-json-userId:', json, userId);
                var user ={
                    userId: -1,
                    userName: ''
                }
                if(userId > 0){
                     user = {
                        userId: userId,
                        userName: userName
                    }                    
                }
                localStorage.setItem('user', JSON.stringify(user));
                console.log('localStorage user: ', localStorage.getItem('user'));
                dispatch(userId> 0?loginSuccess(userId): loginFail(userName));
            });
            //fetchMock.restore();
            return res;
        }
    }
}