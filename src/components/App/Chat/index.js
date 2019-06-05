import React from 'react';
import Content from './Content';
import Input from './Input';
import Header from './Header';
import './__styles__/Chat.scss';

const Chat = () => {
    return (
        <div className="Chat">
            <Header/>
            <Content/>
            <Input/>
        </div>
    );
};

export default Chat;
