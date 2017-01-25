import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import {IntlProvider, addLocaleData, FormattedMessage} from 'react-intl';
import zh_CN from 'zh_CN';
import en_US from 'en_US';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import intl from 'intl';
addLocaleData([...en, ...zh]);


import {Login} from 'Login';

describe('Component.Login',()=>{
    it('Should Exist',()=>{
        expect(Login).toExist();
    });

    it('Should show Login Link in Chinese',()=>{
        //localStorage.removeItem('user');

        //var spy = expect.createSpy();

        var login = TestUtils.renderIntoDocument(<IntlProvider locale={'zh'} messages={zh_CN}><Login/></IntlProvider>);
        
        var $el = $(ReactDOM.findDOMNode(login));
        var link = $('a',$el);
        //console.log('the Login :', $el);
        expect(link[0].innerText).toEqual('登录');
        //TestUtils.Simulate.click($el[0]);
        //console.log('the Login 2:',$el);
        //expect($el).toInclude("<a>Login</a>");
        
    });

    it('Should show Login user Name in English',()=>{
        //localStorage.setItem('user',JSON.stringify({userName:'test', userId:1}));
        var user = {userId:1,userName:'test'};
        var login = TestUtils.renderIntoDocument(<IntlProvider locale={'en'} messages={en_US}><Login user={user}/></IntlProvider>);
        
        var $el = $(ReactDOM.findDOMNode(login));
        var link = $('div',$el);
        console.log('the Login :', link.html().toString());
        expect(link.html().toString()).toInclude('Current:'); //to test English
        expect(link.html().toString()).toInclude(user.userName);  //to test User Name      
    })
})