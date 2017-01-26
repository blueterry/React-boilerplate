import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';

import Login from 'Login';
import Lang from 'Lang';

class Nav extends Component {
    render() {        
        return (
            <div className="top-bar top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text"><FormattedMessage id="appName" /></li>
                        <li className="menu-text">
                            <IndexLink to="/" activeClassName="active-link" ><FormattedMessage id="homeMenu"></FormattedMessage></IndexLink>
                        </li>
                        <li className="menu-text">
                            <Link to="About" activeClassName="active-link"><FormattedMessage id="aboutMenu"></FormattedMessage></Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">
                            <Login/>                            
                        </li>
                        <li className="ment-text">
                            <Lang/>
                        </li>
                        <li className="menu-text"></li>
                        <li className="menu-text">
                            <FormattedMessage id="createdBy"></FormattedMessage> <a  target="_blank" href="http://www.rekete.com"><FormattedMessage id="creator"></FormattedMessage></a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect()(Nav);