import React from 'react';
import PropTypes from 'prop-types';
import useAPI from '../Hooks/useAPI';
import './__styles__/UserList.scss';

const UserList = ({ APIParam }) => {
    const { values } = useAPI(false, `${APIParam}/users`, 1000);

    return (
        <div className="UserList">
            { values &&
                values.map((item) => {
                    return (
                        `${item}, `
                    );
                })
            }
        </div>
    );
};

UserList.propTypes = {
    APIParam: PropTypes.number
};

export default UserList;
