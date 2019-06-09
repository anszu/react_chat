import React from 'react';
import Content from './Content';
import { PropTypes } from 'prop-types';
import Input from './Input';
import ChatName from './ChatName';
import UserList from './UserList';
import './__styles__/Chat.scss';

const Chat = ({ ChannelId, UserName }) => {
    return (
        <div className="Chat">
            <span className="ChatHeader">
                <UserList APIParam={ChannelId}/>
                <ChatName APIParam={ChannelId}/>
            </span>
            <Content APIParam={ChannelId}/>
            <Input ChannelId={ChannelId} UserName={UserName}/>
        </div>
    );
};

Chat.propTypes = {
    ChannelId: PropTypes.number,
    UserName: PropTypes.string
};

export default Chat;
