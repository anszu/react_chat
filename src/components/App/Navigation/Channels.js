import React, { Component } from 'react';
import './__styles__/Channels.scss';

class Channels extends Component {
    constructor () {
        super();

        this.state = {
            channelList: []
        };
    }

    componentDidMount () {
        fetch('http://34.243.3.31:8080/channels', {
            headers: {
                'X-Group-Token': 'glvWcuOo6Rl7'
            }
        })
            .then(res => res.json())
            .then((data) => {
                this.setState({ channelList: data._embedded.channelList });
            });
    }

    render () {
        return (
            <div className="Channels">
                <ul className="ChannelsList">
                    { this.state.channelList.map((item) => {
                        if (item.name) {
                            return (
                                <li key={item.id}
                                    className="ChannelsElement">
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

export default Channels;
