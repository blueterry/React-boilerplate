import React, {Component} from 'react';
import {connect} from 'react-redux';
import Nav from 'Nav';

class Main extends Component {
    render() {
        var {user} = this.props;
        return (
            <div>                
                <Nav user={user} />
                <div className="row">
                    <div className="columns medium-6 large-4 small-centered">                        
                        {this.props.children}     
                    </div> 
                </div>
            </div>
        );
    }
}

export default connect()(Main);