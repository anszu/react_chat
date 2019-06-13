import React, { useContext, useEffect } from 'react';
import * as CONST from '../constants';
import useGetAPI from '../Hooks/useGetAPI';
import { AppContext } from '../AppContext';
import PropTypes from 'prop-types';
import './__styles__/Content.scss';

const Content = ({ children }) => {
    const { ChannelId } = useContext(AppContext);
    const { values } = useGetAPI('messageList', `channels/${ChannelId }/messages`, CONST.REFRESH_MESSAGES);

    useEffect(() => {
        const element = document.getElementById("Content");
        element.scrollTop = element.scrollHeight;
    });

    return (
        <div className="Content" id="Content">
            { values && children(values) }
        </div>
    );
};

Content.propTypes = {
    children: PropTypes.func
};

export default Content;
