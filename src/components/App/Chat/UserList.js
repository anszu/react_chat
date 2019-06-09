import React from 'react';
import PropTypes from 'prop-types';
import useGetAPI from '../Hooks/useGetAPI';
import * as CONST from '../constants';
import './__styles__/UserList.scss';

const UserList = ({ APIParam }) => {
    const { values } = useGetAPI(false, `/channels/${APIParam}/users`, CONST.REFRESH_USERLIST);

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
