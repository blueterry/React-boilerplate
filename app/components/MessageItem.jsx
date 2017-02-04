import React, {Component} from 'react';

class MessageItem extends Component {
    render() {
        var {userImgSrc, messageTitle, messageBody, messageTime, messageIcon} = this.props;

        //debug
        userImgSrc = './img/user3-128x128.jpg';
        messageTitle = 'Support Team';
        messageBody = 'Why not buy a new awesome theme?';
        messageTime = '5 mins';
        messageIcon = 'fa fa-clock-o';
        //debug end
        return (
            <li>
                {/*<!-- start message -->*/}
                <a href="#">
                    <div className="pull-left">
                        <img src={imgSrc} className="img-circle" alt="User Image" />
                    </div>
                    <h4>
                        {messageTitle}
                        <small><i className={messageIcon}></i>{messageTime}</small>
                    </h4>
                    <p>{messageBody}</p>
                </a>
                {/*<!-- end message -->*/}
            </li>            
        );
    }
}

export default MessageItem;