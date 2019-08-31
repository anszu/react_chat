import React from 'react';

import usePostAPI from '../../Hooks/usePostAPI';
import * as CONST from '../../../constants';

import './__styles__/AddChannel.scss';

const AddChannel = () => {
    // call post hook
    const {
        values,
        handleChange,
        handleSubmit,
        handleClick,
        result
    } = usePostAPI(CONST.API_PARAM_CHANNELS,
        { name: CONST.NEW_CHANNEL_NAME_INPUT, topic: CONST.NEW_CHANNEL_TOPIC_INPUT });

    // generate error/ success message due to request result state
    const getError = (result) => {
        if (result) {
            return (result === 201 ? CONST.NEW_CHANNEL_SUCCESS : CONST.NEW_CHANNEL_ERROR);
        }
    };

    // render add channel form
    return (
        <div className="AddChannel">
            <div className="AddChannelHeader">
                {CONST.NEW_CHANNEL_INPUT}{ getError(result) }
            </div>
            <form onSubmit={handleSubmit}>
                <span className="AddChannelForm">
                    <input
                        type="text"
                        name="name"
                        className="AddChannelInput form-control"
                        value={values.name}
                        onChange={handleChange}
                        onClick={handleClick}
                        required
                    />
                    <input
                        type="text"
                        name="topic"
                        className=" AddChannelInput form-control"
                        value={values.topic}
                        onChange={handleChange}
                        onClick={handleClick}
                        required
                    />
                    <button type="submit"
                        className="AddChannelButton btn btn-dark"
                        disabled={values.topic.trim() === '' || values.name.trim() === '' ||
                            values.topic === CONST.NEW_CHANNEL_TOPIC_INPUT ||
                            values.name === CONST.NEW_CHANNEL_NAME_INPUT}>
                        +
                    </button>
                </span>
            </form>
        </div>
    );
};

export default AddChannel;
