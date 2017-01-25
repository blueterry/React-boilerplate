import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import loginAPI from 'loginAPI';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.onLogin = this.onLogin.bind(this);
        this.onLogout = this.onLogout.bind(this);       
    }
    
    render() {
        var {user} = this.props;
        console.log('the user:', user);
        var renderForm = ()=>{
            if(user !== undefined && user.userId > 0){ //Already logged in
                return(
                    <div>
                        <h1 className="title">Hello {user.userName}, Welcome!</h1>
                        <button className="button expanded" onClick={this.onLogout}>Logout</button> 
                    </div>
                )
            }
            return(
                <div>
                    <h1 className="title">Login</h1>                        
                    <form onSubmit={this.onLogin}>
                        <input type="text" ref="userName" placeholder="user name" className="text"/>
                        <input type="password" ref="password" placeholder="password" className="password"/>
                        <input type="submit" className="button expanded" value="Login"/>
                    </form>
                </div>
            );        
        }
        return (            
            <div>
                {renderForm()}
            </div>
        );
    }
    onLogin(e){
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
    onLogout(e){
        e.preventDefault();
        console.log('logout');
        var {dispatch}  = this.props;
        dispatch(loginAPI.logOut());        
    }
}

LoginForm.propTypes = {

};

export default connect((state)=>state.user)(LoginForm);
