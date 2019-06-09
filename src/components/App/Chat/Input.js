import React from 'react';
import useForm from '../Hooks/useForm';
import PropTypes from 'prop-types';
import './__styles__/Input.scss';

const Input = ({ ChannelId, UserName }) => {
    const {
        values,
        handleChange,
        handleSubmit,
        changeCreator
    } = useForm({ content: '', creator: UserName }, `/channels/${ChannelId}/messages`);

    // update creator if necessary
    changeCreator(UserName);

    return (
        <div className="Input">
            <form className="InputForm" onSubmit={handleSubmit}>
                <input className="form-control" name="content" value={values.content} onChange={handleChange}/>
                <button type="submit" className="InputButton btn btn-light">Absenden</button>
            </form>
        </div>
    );
};

Input.propTypes = {
    ChannelId: PropTypes.number,
    UserName: PropTypes.string
};

export default Input;
