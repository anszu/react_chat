import React from 'react';
import PropTypes from 'prop-types';
import './__styles__/Message.scss';

const Message = ({ name, timestamp, content }) => {
    // add leading zero
    const addZero = (dateObj) => {
        return ("0" + dateObj).slice(-2);
    };

    // convert timestring to nice date format
    const parseDate = (timestamp) => {
        const messageDate = new Date(timestamp);
        return (`${addZero(messageDate.getHours())}:${
            addZero(messageDate.getMinutes())}:${
            addZero(messageDate.getSeconds())} Uhr am ${
            addZero(messageDate.getDate())}.${
            addZero(messageDate.getMonth() + 1)}.${
            messageDate.getFullYear()}`);
    };

    // display message
    return (
        <div className="Message alert alert-secondary">
            <div className="MessageInfo">
                <span className="MessageUser">{name}</span>
                <span className="MessageTime">{parseDate(timestamp)}</span>
            </div>
            <div className="MessageText">
                {content}
            </div>
        </div>
    );
};

// prop definitions
Message.propTypes = {
    name: PropTypes.string,
    timestamp: PropTypes.string,
    content: PropTypes.string
};

export default Message;
