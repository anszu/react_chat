import React from 'react';
import Content from './Content';
import { PropTypes } from 'prop-types';
import Input from './Input';
import Header from './Header';
import './__styles__/Chat.scss';

const Chat = ({ ChannelId, UserName }) => {
    return (
        <div className="Chat">
            <Header APIParam={ChannelId}/>
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
