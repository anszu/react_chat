import React from 'react';
import Content from './Content';
import Input from './Input';
import Message from './Message';
import ChatName from './ChatName';
import UserList from './UserList';
import './__styles__/Chat.scss';

const Chat = () => {
    return (
        <div className="Chat">
            <span className="ChatHeader">
                <UserList/>
                <ChatName/>
            </span>
            <Content>
                { (values) => (
                    values.data && values.data.reverse().map(item => (
                        <Message key={item.id}
                            name={item.creator}
                            timestamp={item.timestamp}
                            content={item.content}/>
                    )))
                }
            </Content>
            <Input/>
        </div>
    );
};

export default Chat;
