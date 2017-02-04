
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import {checkLocal} from 'loginActions';
import {changeToEnglish, changeToSimpChinese} from 'langActions';
import {initMainMenu} from 'menuActions';
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
//var locUser = checkLocal();
var curLang = getLang();
//var mainMenu = initMainMenu();
var inited = false;
console.log('localStorage.user:', localStorage.getItem('user'));
//console.log('local user init:', locUser);
//console.log('local lang init:', curLang);
//console.log('mainmenu:', mainMenu);

store.subscribe(()=>{
    var state = store.getState();            
    if(!inited){
        //state.mainMenus = mainMenu;    
        inited = true;        
        state.lang = curLang;        
    }
    console.log('---state changed:',state);
    loginAPI.setLocalUser(state.user);    
    saveLang(state.lang);
});
store.dispatch(initMainMenu());
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
