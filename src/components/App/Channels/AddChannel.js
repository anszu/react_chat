import React from 'react';
import usePostAPI from '../Hooks/usePostAPI';
import './__styles__/AddChannel.scss';

const AddChannel = () => {
    const {
        values,
        handleChange,
        handleSubmit,
        handleClick,
        result
    } = usePostAPI({ name: 'Name', topic: 'Thema' }, 'channels');

    const getError = (result) => {
        if (result) {
            return (result === 201 ? 'Angelegt!' : 'Fehler!');
        }
    };

    return (
        <div className="AddChannel">
            <div className="AddChannelHeader">
                Neuer Channel: { getError(result) }
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
                    <button type="submit" className="AddChannelButton btn btn-dark">+</button>
                </span>
            </form>
        </div>
    );
};

export default AddChannel;