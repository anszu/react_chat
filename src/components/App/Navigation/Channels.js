import React, { Component } from 'react';
import withData from '../HOC/withData.js';
import PropTypes from 'prop-types';
import './__styles__/Channels.scss';

class Channels extends Component {
    handleClick (event) {
        let elems = document.querySelectorAll(".ChannelsElement.ChannelsElement--active");
        elems.forEach((el) => {
            el.classList.remove('ChannelsElement--active');
        });
        event.currentTarget.classList.add('ChannelsElement--active');
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
                                    <form>
                                        <span className="ChannelsForm">
                                            <input type="text" className="ChannelsInput form-control" value="Username"/>
                                            <button type="submit" className="ChannelsButton btn btn-light">></button>
                                        </span>
                                    </form>
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
