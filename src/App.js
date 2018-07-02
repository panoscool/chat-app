import React, { Component } from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import RoomList from './components/RoomList';
import NewRoomForm from './components/NewRoomForm';
import './App.css';

import { tokenUrl, instanceLocator } from './config';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
          messages: [],
      }
    }
    
    componentDidMount() {
        const chatManager = new ChatManager({
            instanceLocator,
            userId: 'panoscool',
            tokenProvider: new TokenProvider({
                url: tokenUrl
            })
        })
        
        chatManager.connect()
        .then(currentUser => {
            this.currentUser = currentUser
            this.currentUser.subscribeToRoom({
                roomId: 10403961,
                messageLimit: 20,
                hooks: {
                    onNewMessage: message => {
                        this.setState({
                          messages: [...this.state.messages, message]
                        })
                    }
                }
            })
        })
    }

    sendMessage = (text) => {
        this.currentUser.sendMessage({
            text: text,
            roomId: 10403961,
        })
    }
    
    render() {
        return (
            <div className="App">
                <RoomList />
                <MessageList messages={this.state.messages} />
                <SendMessageForm sendMessage={this.sendMessage} />
                <NewRoomForm />
            </div>
        );
    }
}

export default App;