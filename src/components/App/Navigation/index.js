import React from 'react';
import PropTypes from 'prop-types';
import Channels from './Channels';
import AddChannel from './AddChannel';
import './__styles__/Navigation.scss';

const Navigation = ({ ChannelId, UserName, changeChannelInfo }) => {
    return (
        <div className="Navigation">
            <Channels
                ChannelId={ChannelId}
                UserName={UserName}
                changeChannelInfo={changeChannelInfo}
            />
            <AddChannel/>
        </div>
    );
};

Navigation.propTypes = {
    ChannelId: PropTypes.number,
    UserName: PropTypes.string,
    changeChannelInfo: PropTypes.func
};

export default Navigation;
