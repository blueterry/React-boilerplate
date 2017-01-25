import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {Link, IndexLink} from 'react-router';

import loginAPI from 'loginAPI';

import LoginForm from 'LoginForm';

class Login extends Component {
    
    render() {
        var {user} = this.props;
        //console.log('components-login.the user:',user, user !== undefined);
        var renderLogin = ()=>{
            if(user !== undefined && user.userId > 0){
                return (<div>Current: {user.userName} </div>);
            }
            return (
                <Link to="loginform" activeClassName="active-link">Login</Link>
            );

        };
        //console.log('renderLogin:', renderLogin)
        return (
            <div>
                {renderLogin()}
            </div>
        );
    }    
}

export default connect(
    (state)=>{
        return state.user;
    }
)(Login);