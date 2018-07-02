import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

class RoomList extends Component {
    componentWillUpdate() {
        const node = ReactDOM.findDOMNode(this)
        this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
    }

    componentDidUpdate() {
        if(this.shouldScrollToBottom){
            const node = ReactDOM.findDOMNode(this)
            node.scrollTop = node.scrollHeight
        }
    }

    render() {
        const orderedRooms = [...this.props.rooms].sort((a, b) => a.id - b.id)
        return (
            <div className="rooms-list">
                <ul>
                <h3>Your rooms:</h3>
                    {orderedRooms.map(room => {
                        const active = this.props.roomId === room.id ? "active" : "";
                        return (
                            <li key={room.id} className={"room" + active}>
                                <a 
                                    onClick={() => this.props.subscribeToRoom(room.id)} 
                                    href="#">{room.name}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default RoomList;