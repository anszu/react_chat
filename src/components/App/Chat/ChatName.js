import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import useGetAPI from '../Hooks/useGetAPI';
import { AppContext } from '../AppContext';
import './__styles__/ChatName.scss';

const ChatName = () => {
    const { ChannelId } = useContext(AppContext);
    const { values } = useGetAPI(false, `channels/${ChannelId}`);

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
