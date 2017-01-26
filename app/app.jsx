
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import {checkLocal} from 'loginActions';
import {changeToEnglish, changeToSimpChinese} from 'langActions';
import {configStore} from 'configStore';

import loginAPI from 'loginAPI';
import langReducer,{getLang, saveLang} from 'langReducer';

import Main from 'Main';
import Loginform from 'LoginForm';
import About from 'About';

//Load foundation
//require('style!css!foundation-sites/dist/css/foundation.min.css') -- done in webpackconfig.js sassLoader
$(document).foundation();

//App css
require('style!css!sass!appStyles');

var store = configStore();
var locUser = checkLocal();
var curLang = getLang();
var inited = false;
//console.log('localStorage.user:',localStorage.getItem('user'));
//console.log('local user init:', locUser);
console.log('local lang init:', curLang);

store.subscribe(()=>{
    var state = store.getState();            
    if(!inited){
        state.lang = curLang;
        inited = true;
    }
    console.log('---state changed:',state);        
    loginAPI.setLocalUser(state.user);    
    saveLang(state.lang);
});

store.dispatch(checkLocal());
//store.dispatch(changeToSimpChinese());

//var initialUser = JSON.parse(localStorage.getItem('user'));

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Main} >
                <Route path="loginform" component={Loginform}>Login</Route>
                <Route path="About" component={About}>About</Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
