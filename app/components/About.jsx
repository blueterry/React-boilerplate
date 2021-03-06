import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <div className="columns medium-12 large-10 small-centered">  
                <h2 className="title">About the Boilerplate</h2>
                <p>
                    <b>react-intl</b>: make the app support multi-culture and languages.
                </p>
                <p className="register-box-body"> 
                    <b>react-notification-system</b>: make a beautiful pop up notification window.
                </p>
            </div>
        );
    }
}

export default About;