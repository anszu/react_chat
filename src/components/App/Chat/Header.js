import React from 'react';
import PropTypes from 'prop-types';
import useAPI from '../Hooks/useAPI';
import './__styles__/Header.scss';

const Header = ({ APIParam }) => {
    const { values } = useAPI(false, APIParam);

    return (
        <div className="Header">
            { values &&
                <>
                    <span className="HeaderName">{values.name}</span>
                    <span className="HeaderTopic">{values.topic}</span>
                </>
            }
        </div>
    );
};

Header.propTypes = {
    APIParam: PropTypes.number
};

export default Header;
