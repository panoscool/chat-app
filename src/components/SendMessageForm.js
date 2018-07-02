import React, { Component } from 'react';

class SendMessageForm extends Component {
    constructor() {
        super();
        this.state = {
            message: '',
        }
    }
    handleChange = (e) => {
        this.setState({message: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        /* Send off the message */
        this.props.sendMessage(this.props.message)
        this.setState({
            message: ''
        })
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit} 
                className="send-message-form">
                <input 
                    onChange={this.handleChange}
                    value={this.state.message}
                    placeholder="Type your message and hit Enter"
                    type="text"
                />
            </form>
        );
    }
}

export default SendMessageForm;