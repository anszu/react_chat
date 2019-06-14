import React, { useContext } from 'react';
import usePostAPI from '../Hooks/usePostAPI';
import PropTypes from 'prop-types';
import { AppContext } from '../AppContext';
import './__styles__/AddUserName.scss';

const AddUserName = ({ handleUserSubmit }) => {
    // get username from context and call post api
    const { UserName } = useContext(AppContext);
    const {
        values,
        handleChange,
        handleSubmitWithCallback,
        handleClick
    } = usePostAPI({ creator: UserName }, false, handleUserSubmit);

    // render form
    return (
        <form className="AddUserNameForm" onSubmit={handleSubmitWithCallback}>
            <input
                type="text"
                name="creator"
                value={values.creator}
                className="AddUserNameInput form-control"
                onChange={handleChange}
                onClick={handleClick}
            />
            <button type="submit" className="AddUserNameButton btn btn-light">></button>
        </form>
    );
};

// prop definitions
AddUserName.propTypes = {
    handleUserSubmit: PropTypes.func
};

export default AddUserName;
