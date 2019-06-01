import React from 'react';
import Channels from './Channels.js';
import AddChannel from './AddChannel.js';
import './__styles__/Navigation.scss';

const Navigation = () => {
    return (
        <div className="Navigation">
            <Channels/>
            <AddChannel/>
        </div>
    );
};

export default Navigation;
