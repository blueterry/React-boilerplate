import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';

class UserInfo extends Component {
    render() {
        var {user} = this.props
        var loginFlag = (user !== undefined && user.userId > 0);
        console.log('the user info:', user, loginFlag);
        var loginForm = ()=>{
            if(loginFlag){
                return(
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src={"../img/user2-160x160.jpg"} className="img-circle" alt="User Image" />
                        </div>
                        <div className="pull-left info">
                            <p style={{color:'#adadff'}}>{user.userName}</p>
                            <span className="login-success"><i className="fa fa-circle login-success"></i> Online</span>
                        </div>                            
                    </div>
                )
            }
            return(
                <div className="user-panel">
                    <div className="pull-left image">
                        <img src={"../img/user-512.png"} alt="User Image" className="img-circle"/>
                    </div>
                    <div className="pull-left info">
                        <p><FormattedMessage id="notLoginYet"></FormattedMessage></p>
                        <span className="login-fail"><i className="fa fa-circle login-fail"></i> Offline</span>
                    </div>
                </div>            
            )
        }
        return (
            loginForm()
        );
    }
}

export default connect(state=>state)(UserInfo);