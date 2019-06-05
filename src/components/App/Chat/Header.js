import React from 'react';
import PropTypes from 'prop-types';
import withData from '../HOC/withData.js';
import './__styles__/Header.scss';

const Header = ({ data }) => {
    return (
        <div className="Header">
            <span className="HeaderName">{data.name}</span>
            <span className="HeaderTopic">({data.topic})</span>
        </div>
    );
};

Header.propTypes = {
    data: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ])
};

export default withData(Header, false, '2');
