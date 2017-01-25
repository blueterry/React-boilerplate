import React, {Component} from 'react';
import {connect} from 'react-redux';
import Nav from 'Nav';
import zh_CN from 'zh_CN';
import en_US from 'en_US';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import intl from 'intl';
import {IntlProvider, addLocaleData, FormattedMessage} from 'react-intl';
addLocaleData([...en, ...zh]);

class Main extends Component {
    render() {
        
        return (
            <IntlProvider locale={'zh'} messages={zh_CN}>
            <div>                
                <Nav/>
                <div className="row">
                    <div className="columns medium-6 large-4 small-centered">                        
                        {this.props.children} 
                    </div> 
                </div>
            </div>
            </IntlProvider>
        );
    }
}

export default Main;