import React, { useContext } from 'react';
import useGetAPI from '../Hooks/useGetAPI';
import * as CONST from '../constants';
import { AppContext } from '../AppContext';
import './__styles__/UserList.scss';

const UserList = () => {
    // get channel id from context and call get hook
    const { ChannelId } = useContext(AppContext);
    const { values } = useGetAPI(false,
        `${CONST.API_PARAM_CHANNELS}/${ChannelId}/${CONST.API_PARAM_USERS}`,
        CONST.REFRESH_USERLIST);

    // map trough user resultset provided by hook
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

export default UserList;
