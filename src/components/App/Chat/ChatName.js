import React from 'react';
import PropTypes from 'prop-types';
import useAPI from '../Hooks/useAPI';
import './__styles__/ChatName.scss';

const ChatName = ({ APIParam }) => {
    const { values } = useAPI(false, APIParam);

    return (
        <div className="ChatName">
            { values &&
                <>
                    <span className="ChatNameName">{values.name}</span>
                    <span className="ChatNameTopic">{values.topic}</span>
                </>
            }
        </div>
    );
};

ChatName.propTypes = {
    APIParam: PropTypes.number
};

export default ChatName;
