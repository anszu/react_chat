import React from 'react';
import './__styles__/ChannelItem.scss';

const ChannelItem = ({ item, ChannelId, handleClick, children }) => {
    console.log(ChannelId);
    return (
        <li id={item.id}
            className={
                `ChannelItem ${ChannelId === item.id ? 'ChannelItem--active' : ''}`
            }
            onClick={handleClick}>
            <div className="ChannelItemName">
                {item.name}
            </div>
            <span className="ChannelItemTopic">
                {item.topic}
            </span>
            {children}
        </li>
    );
};

export default ChannelItem;
