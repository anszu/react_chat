import React, { useContext } from 'react';

import useGetAPI from '../Hooks/useGetAPI';
import { AppContext } from '../AppContext';
import * as CONST from '../constants';

import './__styles__/ChannelName.scss';

const ChannelName = () => {
    // get channel id from context and call get hook
    const { channelId } = useContext(AppContext);
    const { values } = useGetAPI(`${CONST.API_PARAM_CHANNELS}/${channelId}`);

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

export default ChannelName;
