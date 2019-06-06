import React from 'react';
import useForm from '../Hooks/useForm.js';
import './__styles__/Input.scss';

const Input = () => {
    const {
        values,
        handleChange,
        handleSubmit
    } = useForm({ content: '', creator: 'MallorcaJane' }, '/channels/10/messages', ['creator']);

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
