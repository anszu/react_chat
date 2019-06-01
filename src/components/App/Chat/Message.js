import React from 'react';
import PropTypes from 'prop-types';
import './__styles__/Message.scss';

const Message = ({ name, timestamp, content }) => {
    return (
        <div className="Message alert alert-secondary">
            <div className="MessageInfo">
                <span className="MessageUser">{name}</span>
                <span className="MessageTime">{timestamp}</span>
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
