import React from 'react';
import PropTypes from 'prop-types';
import './__styles__/NavigateChannels.scss';

const NavigateChannels = ({ handleClick, data }) => {
    return (
        <>
            { data &&
                (
                    <div className="NavigateChannels">
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

NavigateChannels.propTypes = {
    handleClick: PropTypes.func
};

export default NavigateChannels;

