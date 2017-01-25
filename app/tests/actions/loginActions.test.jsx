import expect from 'expect';
import moment from 'moment';
import df from 'deep-freeze-strict';

import * as loginAction from 'loginActions';


describe('loginAction',()=>{
    it('should Exist', ()=>{
        //console.log(loginAction);
        expect(loginAction).toExist();
    });

    it('should genearte login action',()=>{
        var action ={
            type: loginAction.LOGGING_IN,
            userName: 'test',
            password: 'test',
            userId: -1,            
            loggingIn: true
            
        }

        var res = loginAction.login('test','test');
        expect(res).toEqual(action);
        expect(res.userName).toEqual(action.userName);
    });

    it('Should generate loginSuccess action',()=>{
        var action ={
            type:loginAction.LOGGED_IN,            
            loggingIn:false,
            userId: 1,
            userName: 'test',
            loginAt: moment().unix()            
        }
        var res = loginAction.loginSuccess(1, 'test');
        expect(res).toEqual(action);
        expect(res.userId).toEqual(action.userId);
    });

    it('Should generate loginFail action',()=>{
        var action ={
            type:loginAction.LOGIN_FAIL,
            loggingIn:false,
            userId: -1,
            password:undefined,
            userName:'test'            
        }
        var res = loginAction.loginFail('test');
        expect(res).toEqual(action);
    });

    it('Should generate logOut action',()=>{
        var action ={
            type:loginAction.NOT_LOGIN_YET,
            loggingIn:false,
            userId:undefined,
            userName: undefined,
            loginAt: undefined,
            password: undefined
        }
        var res = loginAction.logOut();
        expect(res).toEqual(action);
    });
    
    it('Should generate GetLocalUser Action',()=>{
        var action={
            type: loginAction.GET_LOCAL_USER,
            loggingIn:false,
            userId:1,
            password: undefined,
            userName: 'test'            
        }
        localStorage.setItem('user', JSON.stringify({userId:1, userName:'test'}));
        var res = loginAction.checkLocal();
        expect(res).toEqual(action);
    })    
})