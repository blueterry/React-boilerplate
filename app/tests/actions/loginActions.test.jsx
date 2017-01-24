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
            user:{
                userName: 'test',
                password: 'test',
                userId: -1
            },
            loggingIn: true
            
        }

        var res = loginAction.login('test','test');
        expect(res).toEqual(action);
        expect(res.user.userName).toEqual(action.user.userName);
    });

    it('Should generate loginSuccess action',()=>{
        var action ={
            type:loginAction.LOGGED_IN,            
            loggingIn:false,
            user:{
                userId: 1,
                loginAt: moment().unix()
            }
        }
        var res = loginAction.loginSuccess(1);
        expect(res).toEqual(action);
        expect(res.user.userId).toEqual(action.user.userId);
    });

    it('Should generate loginFail action',()=>{
        var action ={
            type:loginAction.LOGIN_FAIL,
            loggingIn:false,
            user:{
                userId: -1,
                password:undefined,
                userName:'test'
            }
        }
        var res = loginAction.loginFail('test');
        expect(res).toEqual(action);
    });

    it('Should generate logOut action',()=>{
        var action ={
            type:loginAction.NOT_LOGIN_YET,
            loggingIn:false,
            user: undefined
        }
        var res = loginAction.logOut();
        expect(res).toEqual(action);
    });
    
    
})