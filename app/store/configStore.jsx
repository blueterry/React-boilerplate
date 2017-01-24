import redux,{combineReducers, compose, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {loginReducer} from 'loginReducer';

export var configStore = (initState = {
    user: undefined    
}) => {
    var reducer = combineReducers({
        user: loginReducer
    });

    var store = createStore(reducer, initState, compose(
        applyMiddleware(thunkMiddleware),
        typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    ));

    return store;

};