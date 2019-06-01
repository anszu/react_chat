import React from 'react';
import './__styles__/AddChannel.scss';

const AddChannel = () => {
    return (
        <div className="AddChannel">
            <div className="AddChannelHeader">
                Neuer Channel:
            </div>
            <span className="AddChannelForm">
                <input type="text" className="form-control"/>
                <button type="button" className="AddChannelButton btn btn-dark">+</button>
            </span>
        </div>
    );
};

export default AddChannel;
