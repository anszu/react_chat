import React from 'react';
import Content from './Content';
import Input from './Input';
import './__styles__/Chat.scss';

const Chat = () => {
    return (
        <div className="Chat">
            <Content/>
            <Input/>
        </div>
    );
};

export default Chat;
