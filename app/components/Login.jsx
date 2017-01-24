import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import loginAPI from 'loginAPI';

import {login, logOut} from 'loginActions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.onSubmitLogin = this.onSubmitLogin.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }
    render() {
        var {user} = this.props;
        console.log('components-login.the user:',user, user !== undefined);
        var renderLogin = ()=>{
            if(user !== undefined && user.userId > 0){
                return (<div>Current: {user.userName} <button className="button" onClick={this.onLogout}>Logout</button> </div>);
            }
            return (
                <form onSubmit={this.onSubmitLogin}>
                    <input type="text" ref="userName" placeholder="user name" className="text"/>
                    <input type="password" ref="password" className="password"/>
                    <input type="submit" className="button" value="Login"/>
                </form>
            );

        };
        //console.log('renderLogin:', renderLogin)
        return (
            <div>
                {renderLogin()}
            </div>
        );
    }
    onLogout(e){
        e.preventDefault();
        console.log('logout');
        var {dispatch}  = this.props;
        dispatch(loginAPI.logOut());        
    }
    onSubmitLogin(e){
        e.preventDefault();
        console.log('login.props:',this.props);
        var {dispatch}  = this.props;
        var {userName,password}  = this.refs;
        if(userName.value.length > 0 && password.value.length > 0){
            dispatch(loginAPI.verifyUser(userName.value, password.value))
        }else{
            console.log('login failed');
            userName.focus();
            password.value = "";
        }
    }
}

export default connect(
    (state)=>{
        return state.user;
    }
)(Login);