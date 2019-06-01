import React, { Component } from 'react';
import Message from './Message';
import Input from './Input';
import './__styles__/Chat.scss';

class Chat extends Component {
    constructor () {
        super();

        this.state = {
            messages: []
        };
    }

    componentDidMount () {
        fetch('http://34.243.3.31:8080/channels/1/messages', {
            headers: {
                'X-Group-Token': 'glvWcuOo6Rl7'
            }
        })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    messages: data._embedded.messageList
                });
            });
    }

    render () {
        return (
            <div className="Chat">
                <div className="Content">
                    { this.state.messages.map(item => {
                        return (
                            <Message key={item.id}
                                name={item.creator}
                                timestamp={item.timestamp}
                                content={item.content}/>
                        );
                    })}
                </div>
                <Input/>
            </div>
        );
    }
}

export default Chat;
