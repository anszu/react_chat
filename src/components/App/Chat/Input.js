import React from 'react';
import usePostAPI from '../Hooks/usePostApi';
import PropTypes from 'prop-types';
import './__styles__/Input.scss';

const Input = ({ ChannelId, UserName }) => {
    const {
        values,
        handleChange,
        handleSubmit,
        updateValue
    } = usePostAPI({ content: '', creator: UserName }, `/channels/${ChannelId}/messages`);

    // update creator if necessary
    updateValue(UserName, 'creator');

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
