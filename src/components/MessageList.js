import React, { Component } from 'react';

const DUMMY_DATA = [
    {
        senderId: 'perborgen',
        text: 'Hey, how is it going?'
    },
    {
        senderId: 'janedoe',
        text: 'Great! How about you?'
    },
    {
        senderId: 'perborgen',
        text: 'Good to hear! I am great as well'
    }
]

class MessageList extends Component {
    render() {
        return (
            <div className="message-list">
                {DUMMY_DATA.map((messages, index) => {
                    return (
                        <div key={index} className="messages">
                        <div className="message-username">{messages.senderId}</div>
                        <div className="message-text">{messages.text}</div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default MessageList;