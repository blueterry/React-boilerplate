import React, {Component} from 'react';
import * as langAction from 'langActions';
import {connect} from 'react-redux';
import NotificationSystem from 'react-notification-system';
import {FormattedMessage} from 'react-intl';

import en from 'en_US';
import cn from 'zh_CN';

class Lang extends Component {
    constructor(props) {
        super(props);
        this.SetToChinese = this.SetToChinese.bind(this);
        this.SetToEnglish = this.SetToEnglish.bind(this);
        this._addNotification = this._addNotification.bind(this);
        //this._notificationSystem = this._notificationSystem.bind(this);
    }
    _notificationSystem=null;
    
    _addNotification(message){
        //e.preventDefault();
        //var langMessage = this.refs.langMessage;
        
        this._notificationSystem.addNotification({
            message,
            level:'success',
            position: 'br'
        });
    }
    componentDidMount(){
        this._notificationSystem = this.refs.notificationSystem;
        
    }
    
    render() {
        var {lang} = this.props;
        console.log('Lang.lang:', lang);
        return (
            <div className="menu-text">                                
                <NotificationSystem ref="notificationSystem" />
                <button onClick={this.SetToEnglish}>EN</button> <button onClick={this.SetToChinese}>中</button>
            </div>
        );
    }

    SetToChinese (){
        console.log('set to chn');
        var {dispatch} = this.props;
        this._addNotification(cn.langChanged);
        return dispatch(langAction.changeToSimpChinese());
    }
    
    SetToEnglish(){
        console.log('set to eng');
        var {dispatch} = this.props;
        this._addNotification(en.langChanged);
        return dispatch(langAction.changeToEnglish());
    }
}

export default connect(state=>state)(Lang);