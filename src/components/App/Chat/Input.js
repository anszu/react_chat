import React, { useContext } from 'react';
import usePostAPI from '../Hooks/usePostApi';
import { AppContext } from '../AppContext';
import './__styles__/Input.scss';

const Input = () => {
    const { ChannelId, UserName } = useContext(AppContext);
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

export default Input;
