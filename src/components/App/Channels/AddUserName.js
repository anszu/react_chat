import React, { useContext } from 'react';

import usePostAPI from '../Hooks/usePostAPI';
import { AppContext } from '../AppContext';
import * as CONST from '../constants';

import './__styles__/AddUserName.scss';

const AddUserName = () => {
    // get channel id, username and changechannelinfo function from context
    const { channelId, userName, changeChannelInfo } = useContext(AppContext);

    const {
        values,
        handleChange,
        handleClick
    } = usePostAPI('', { creator: userName });

    // new username was submitted
    const handleSubmit = () => {
        event.preventDefault();
        changeChannelInfo(channelId, values.creator);
    };

    // render form
    return (
        <div className="AddUserName">
            {CONST.CHANGE_USERNAME}
            <form className="AddUserNameForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="creator"
                    value={values.creator}
                    className="AddUserNameInput form-control"
                    onChange={handleChange}
                    onClick={handleClick}
                />
                <button type="submit"
                    className="AddUserNameButton btn btn-light"
                    disabled={values.creator.trim() === ''}>
                    >
                </button>
            </form>
        </div>
    );
};

export default AddUserName;
