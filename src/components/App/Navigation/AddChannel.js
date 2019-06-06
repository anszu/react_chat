import React from 'react';
import useForm from '../Hooks/useForm';
import './__styles__/AddChannel.scss';

const AddChannel = () => {
    const {
        values,
        handleChange,
        handleSubmit,
        handleClick
    } = useForm({ name: 'Name', topic: 'Thema' }, 'channels');

    return (
        <div className="AddChannel">
            <div className="AddChannelHeader">
                Neuer Channel:
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
