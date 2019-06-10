import React from 'react';
import PropTypes from 'prop-types';
import './__styles__/ChannelItem.scss';

const ChannelItem = ({ item, ChannelId, handleClick, children }) => {
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

ChannelItem.propTypes = {
    item: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    ChannelId: PropTypes.number,
    handleClick: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
};

export default ChannelItem;
