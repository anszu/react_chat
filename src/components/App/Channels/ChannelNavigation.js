import React from 'react';
import PropTypes from 'prop-types';
import './__styles__/ChannelNavigation.scss';

const ChannelNavigation = ({ handleClick, data }) => {
    // render navigation element
    return (
        <>
            { data &&
                (
                    <div className="ChannelNavigation">
                        <span onClick={handleClick} id={data.first.href}>{`<<`}</span>
                        {data.prev && (<span onClick={handleClick} id={data.prev.href}>{`<`}</span>)}
                        {data.next && (<span onClick={handleClick} id={data.next.href}>{`>`}</span>)}
                        <span onClick={handleClick} id={data.last.href}>{`>>`}</span>
                    </div>
                )
            }
        </>
    );
};

// prop definitions
ChannelNavigation.propTypes = {
    handleClick: PropTypes.func,
    data: PropTypes.object
};

export default ChannelNavigation;

