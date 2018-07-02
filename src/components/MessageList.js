import React, { Component } from 'react';
import Message from './Message';
import '../App.css';

class MessageList extends Component {
    render() {
        return (
            <div className="message-list">
                {this.props.messages.map((messages, index) => {
                    return (
                        <Message key={index} username={messages.senderId} text={messages.text} />
                    )
                })}
            </div>
        );
    }
}

export default MessageList;