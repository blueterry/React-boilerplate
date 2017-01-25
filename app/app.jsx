
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import {checkLocal} from 'loginActions';
import {configStore} from 'configStore';

import loginAPI from 'loginAPI';

import Main from 'Main';
import Loginform from 'LoginForm';

//Load foundation
//require('style!css!foundation-sites/dist/css/foundation.min.css') -- done in webpackconfig.js sassLoader
$(document).foundation();

//App css
require('style!css!sass!appStyles');

var store = configStore();
var locUser = checkLocal();

//console.log('localStorage.user:',localStorage.getItem('user'));
//console.log('local user init:', locUser);

store.subscribe(()=>{
    var state = store.getState();            
    //console.log('---state changed:',state);
    loginAPI.setLocalUser(state.user);
});

store.dispatch(checkLocal());


//var initialUser = JSON.parse(localStorage.getItem('user'));

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Main} >
                <Route path="loginform" component={Loginform}>Login</Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
