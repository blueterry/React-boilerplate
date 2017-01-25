import expect from 'expect';
import df from 'deep-freeze-strict';

import {NOT_LOGIN_YET, LOGGED_IN, LOGGING_IN, LOGIN_FAIL} from 'loginActions';
import {loginReducer} from 'loginReducer';


describe('loginReducer',()=>{
    it('Should Exist',()=>{
        expect(loginReducer).toExist();
    });
    it('Should start logging',()=>{
        var action = {
            type: LOGGING_IN,
            userName: 'test',
            password: 'test',
            userId: -1,            
            loggingIn: false
        }
        var userState={
            userId: -1,
            userName: 'test',
            password: 'test',
            loginAt: undefined
        }
        var res = loginReducer('',df(action));
        //console.log('loginReducer.test.res:',res);
        expect(res).toEqual(userState);
    });  
})