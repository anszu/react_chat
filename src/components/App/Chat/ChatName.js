import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import useGetAPI from '../Hooks/useGetAPI';
import { AppContext } from '../AppContext';
import './__styles__/ChatName.scss';

const ChatName = () => {
    // get channel id from context and call get hook
    const { ChannelId } = useContext(AppContext);
    const { values } = useGetAPI(false, `channels/${ChannelId}`);

    // display chat name and topic
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

// prop definitions
ChatName.propTypes = {
    APIParam: PropTypes.number
};

export default ChatName;
