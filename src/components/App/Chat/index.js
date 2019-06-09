import React from 'react';
import Content from './Content';
import Input from './Input';
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
            <Content/>
            <Input/>
        </div>
    );
};

export default Chat;
