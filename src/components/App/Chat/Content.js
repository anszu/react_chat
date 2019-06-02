import React, { Component } from 'react';
import Message from './Message';
import withData from '../HOC/withData.js';
import PropTypes from 'prop-types';
import './__styles__/Content.scss';

class Content extends Component {
    render () {
        return (
            <div className="Content">
                { this.props.data.map(item => {
                    return (
                        <Message key={item.id}
                            name={item.creator}
                            timestamp={item.timestamp}
                            content={item.content}/>
                    );
                })}
            </div>
        );
    }
}

Content.propTypes = {
    data: PropTypes.array
};

export default withData(Content, 'channels/10/messages', 'messageList');
