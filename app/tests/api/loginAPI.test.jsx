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

    it('should Get user', ()=>{
        var loginAction = {

        }
        var store = configStore();
        // store.subscribe(()=>{
        //     var state = store.getState();
        //     console.log('store init state:', state);            
        // });
        fetchMock.get('*',{userId:1});
        var res = loginAPI.verifyUser('terry','terry123');
        //.then(data=>{
        //    console.log('data:',data);
        //});        
        console.log('loginAPI test res:', res);
        store.dispatch(res);
        fetchMock.restore();
        
    })

});