import React from 'react';
import PropTypes from 'prop-types';
import useGetAPI from '../Hooks/useGetAPI';
import './__styles__/ChatName.scss';

const ChatName = ({ APIParam }) => {
    const { values } = useGetAPI(false, `/channels/${APIParam}`);

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
