import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {Link, IndexLink} from 'react-router';
import {FormattedMessage} from 'react-intl';


import loginAPI from 'loginAPI';
import LoginForm from 'LoginForm';

export class Login extends Component {
    
    render() {
        var {user} = this.props;
        //console.log('Login.user:', user)
        //console.log('components-login.the user:',user, user !== undefined);
        var renderLogin = ()=>{
            if(user !== undefined && user.userId > 0){
                return (<div><FormattedMessage id="currentUser"></FormattedMessage> : {user.userName} </div>);
            }
            return (
                <Link to="loginform" activeClassName="active-link"><FormattedMessage id="loginButton"/></Link>
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

export default connect(state=>state)(Login);