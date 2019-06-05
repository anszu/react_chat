import React, { Component } from 'react';
import withData from '../HOC/withData.js';
import PropTypes from 'prop-types';
import './__styles__/Channels.scss';

class Channels extends Component {
    handleClick (event) {
        console.log(event.currentTarget.getAttribute('id'));
    }

    render () {
        return (
            <div className="Channels">
                <ul className="ChannelsList">
                    { this.props.data.map((item) => {
                        if (item.name) {
                            return (
                                <li key={item.id}
                                    id={item.id}
                                    className="ChannelsElement"
                                    onClick={this.handleClick}>
                                    <span className="ChannelsName">
                                        {item.name}
                                    </span>
                                    <span className="ChannelsTopic">
                                        {item.topic}
                                    </span>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        );
    }
}

Channels.propTypes = {
    data: PropTypes.array
};

export default withData(Channels, 'channelList', '', 10000);
