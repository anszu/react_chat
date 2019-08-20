import React, { useContext } from 'react';
import * as CONST from '../constants';
import useGetAPI from '../Hooks/useGetAPI';
import { AppContext } from '../AppContext';
import PropTypes from 'prop-types';
import './__styles__/Content.scss';

const Content = ({ children }) => {
    // get channel id from context
    const { ChannelId } = useContext(AppContext);

    // call get hook
    const { values } = useGetAPI(`${CONST.API_PARAM_CHANNELS}/${ChannelId}/${CONST.API_PARAM_MESSAGES}`,
        CONST.REFRESH_MESSAGES);

    // call rendering prop function
    return (
        <div className="Content" id="Content">
            { values && children(values) }
        </div>
    );
};

// prop definitions
Content.propTypes = {
    children: PropTypes.func
};

export default Content;
