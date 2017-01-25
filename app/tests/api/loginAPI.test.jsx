import expect from 'expect';
import df from 'deep-freeze-strict';
import fetchMock from 'fetch-mock';

import loginAPI from 'loginAPI';
import {configStore} from 'configStore';


describe('loginAPI',()=>{
    it('should Exist', ()=>{
        //console.log(loginAction);
        expect(loginAPI).toExist();
    });
    it('should get local user', ()=>{
        var user={
            userId: 1,
            userName: 'test',
            loginAt: 1123
        };
        localStorage.setItem('user', JSON.stringify(user));
        expect(loginAPI.getLocalUser()).toEqual(user);
    });

    it('Should set local user', ()=>{
        var user={
            userId: 1,
            userName: 'user name',
            loginAt: 112233
        }
        loginAPI.setLocalUser(user);
        expect(JSON.stringify(user)).toEqual(localStorage.getItem('user'));
    });

    it('Should logout', ()=>{
        
    });

    it('should Get user', ()=>{
        var loginAction = {
        }
        var store = configStore();        
        fetchMock.get('*',{userId:1});
        var res = loginAPI.verifyUser('terry','terry123');
                
        store.dispatch(res);
        fetchMock.restore();
        
    })

});