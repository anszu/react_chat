import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import useGetAPI from '../Hooks/useGetAPI';
import { AppContext } from '../AppContext';
import * as CONST from '../constants';
import './__styles__/ChannelName.scss';

const ChannelName = () => {
    // get channel id from context and call get hook
    const { ChannelId } = useContext(AppContext);
    const { values } = useGetAPI(false, `${CONST.API_PARAM_CHANNELS}/${ChannelId}`);

    // display chat name and topic
    return (
        <div className="ChannelName">
            { values &&
                <>
                    <span className="ChannelNameTitle">{values.name}</span>
                    <span className="ChannelNameTopic">{values.topic}</span>
                </>
            }
        </div>
    );
};

// prop definitions
ChannelName.propTypes = {
    APIParam: PropTypes.number
};

export default ChannelName;
