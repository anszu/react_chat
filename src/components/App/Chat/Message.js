import React from 'react';
import PropTypes from 'prop-types';
import './__styles__/Message.scss';

const Message = ({ name, timestamp, content }) => {
    const addZero = (dateObj) => {
        return ("0" + (dateObj + 1)).slice(-2);
    };

    const parseDate = (timestamp) => {
        const messageDate = new Date(timestamp);
        return (`${addZero(messageDate.getHours())}:${
            addZero(messageDate.getMinutes())}:${
            addZero(messageDate.getSeconds())} Uhr am ${
            addZero(messageDate.getDate())}.${
            addZero(messageDate.getMonth())}.${
            messageDate.getFullYear()}`);
    };

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

Message.propTypes = {
    name: PropTypes.string,
    timestamp: PropTypes.string,
    content: PropTypes.string
};

export default Message;
