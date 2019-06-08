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
    } = useForm({ username: UserName }, false, handleUserSubmit);

    return (
        <form onSubmit={handleSubmit}>
            <span className="AddUserNameForm">
                <input
                    type="text"
                    name="username"
                    value={values.username}
                    className="AddUserNameInput form-control"
                    onChange={handleChange}
                    onClick={handleClick}
                />
                <button type="submit" className="AddUserNameButton btn btn-light">></button>
            </span>
        </form>
    );
};

AddUserName.propTypes = {
    UserName: PropTypes.string,
    handleUserSubmit: PropTypes.func
};

export default AddUserName;
