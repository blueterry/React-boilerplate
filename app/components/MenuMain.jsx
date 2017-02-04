import React, {Component} from 'react';
import {connect} from 'react-redux';

import MenuItem from 'MenuItem';

class MenuMain extends Component {        
    render() {        
        var {mainMenus} = this.props;
        console.log('menuMain.mainMenus:',mainMenus)
        var menuMap = ()=>{
            return mainMenus.map((mi)=>{
                return (
                    <MenuItem key={mi.miName} menuData={mi}></MenuItem>
                );
            })
        }
        return (
            <ul className="sidebar-menu">
                {menuMap()}
            </ul>
        );
    }
}

export default connect(state=>state)(MenuMain);