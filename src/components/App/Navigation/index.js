import React from 'react';
import Channels from './Channels';
import AddChannel from './AddChannel';
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
