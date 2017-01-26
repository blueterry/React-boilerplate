import React, {Component} from 'react';
import {connect} from 'react-redux';
import Nav from 'Nav';
import zh_CN from 'zh_CN';
import en_US from 'en_US';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import intl from 'intl';
import {IntlProvider, addLocaleData, FormattedMessage} from 'react-intl';
import {getLang} from 'langReducer';

addLocaleData([...en, ...zh]);

class Main extends Component {
    render() {
        var theLang = getLang();
        console.log('Main-theLang:',theLang);
        return (
            <IntlProvider locale={theLang} messages={theLang === "en" ? en_US : zh_CN}>
                <div>                
                    <Nav/>
                    <div className="row">                                          
                        {this.props.children} 
                    </div>
                </div>
            </IntlProvider>
        );
    }
}

export default Main;