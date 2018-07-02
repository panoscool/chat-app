import React, { Component } from 'react';
import Message from './Message';
import '../App.css';

class MessageList extends Component {
    render() {
        if (!this.props.roomId) {
            return (
                <div className="message-list">
                    <div className="join-room">
                        &larr; Join a room!
                    </div>
                </div>
            )
        }
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