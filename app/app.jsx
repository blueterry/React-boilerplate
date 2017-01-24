
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import {checkLocal} from 'loginActions';
import {configStore} from 'configStore';
import Main from 'Main';

//Load foundation
//require('style!css!foundation-sites/dist/css/foundation.min.css') -- done in webpackconfig.js sassLoader
$(document).foundation();

//App css
require('style!css!sass!appStyles');

var store = configStore();

store.subscribe(()=>{
    var state = store.getState();
    state.user = checkLocal();
    console.log('initial State:', state);
});
store.dispatch(checkLocal());
//var initialUser = JSON.parse(localStorage.getItem('user'));

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Main}>
                
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
