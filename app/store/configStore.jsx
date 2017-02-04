import redux,{combineReducers, compose, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {loginReducer} from 'loginReducer';
import {langReducer} from 'langReducer';
import {menuReducer} from 'menuReducer';

export var configStore = (initState = {
    user: {},
    lang: "en",
    mainMenus: []
}) => {
    var reducer = combineReducers({
       user: loginReducer,
       lang: langReducer,
       mainMenus: menuReducer
    });

    var store = createStore(reducer, initState, compose(
        applyMiddleware(thunkMiddleware),
        typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    ));

    return store;
};