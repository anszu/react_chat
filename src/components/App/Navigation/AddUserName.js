import React from 'react';
import useForm from '../Hooks/useForm';
import PropTypes from 'prop-types';
import './__styles__/AddUserName.scss';

const AddUserName = ({ UserName, handleUserSubmit }) => {
    const {
        values,
        handleChange,
        handleSubmit,
        handleClick
    } = useForm({ creator: UserName }, false, handleUserSubmit);

    return (
        <form className="AddUserNameForm" onSubmit={handleSubmit}>
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

AddUserName.propTypes = {
    UserName: PropTypes.string,
    handleUserSubmit: PropTypes.func
};

export default AddUserName;
