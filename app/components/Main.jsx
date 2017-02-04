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

import MenuMain from 'MenuMain';
import UserInfo from 'UserInfo';

addLocaleData([...en, ...zh]);

class Main extends Component {
    render() {
        var theLang = getLang();
        console.log('Main-theLang:',theLang);
        return (
            <IntlProvider locale={theLang} messages={theLang === "en" ? en_US : zh_CN}>
                <div>
                    <Nav/>                    
                    <aside className="main-sidebar small-4 medium-4 large-3 columns ">                                               
                        <section className="sidebar">
                            <UserInfo/>
                            <MenuMain/>
                        </section>
                    </aside>
                    <div className="columns small-8 medium-8 large-9">
                        <div className="row">        
                            {this.props.children} 
                        </div>
                    </div>
                </div>
            </IntlProvider>
        );
    }
}

export default Main;