import React, { useContext } from 'react';

import usePostAPI from '../../Hooks/usePostAPI';
import { AppContext } from '../../../AppContext';
import * as CONST from '../../../constants';

import './__styles__/Input.scss';

const Input = () => {
    // get channel id and username from context and call post hook
    const { channelId, userName } = useContext(AppContext);

    const {
        values,
        handleChange,
        handleSubmit,
        updateValue
    } = usePostAPI(`${CONST.API_PARAM_CHANNELS}/${channelId}/${CONST.API_PARAM_MESSAGES}`,
        { content: '', creator: userName });

    const getCurrentDate = () => {
        const today = new Date();
        return (`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}${' '
        }${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);
    };

    // update creator if necessary
    updateValue(userName, 'creator');
    updateValue(getCurrentDate(), 'timestamp');

    // display form
    return (
        <div className="Input">
            <form className="InputForm" onSubmit={handleSubmit}>
                <input className="form-control" name="content" value={values.content} onChange={handleChange}/>
                <button
                    type="submit"
                    className="InputButton btn btn-light"
                    disabled={values.content.trim() === ''}>
                    {CONST.BUTTON_MESSAGE_INPUT}
                </button>
            </form>
        </div>
    );
};

export default Input;
