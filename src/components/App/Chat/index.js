import React from 'react';
import Content from './Content';
import Input from './Input';
import Message from './Message';
import ChannelName from './ChannelName';
import UserList from './UserList';
import './__styles__/Chat.scss';

const Chat = () => {
    // integrate sub components and call message within
    // a rendering prop
    return (
        <div className="Chat">
            <span className="ChatHeader">
                <UserList/>
                <ChannelName/>
            </span>
            <Content>
                { (data) => (
                    data.map((item, index) => (
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
