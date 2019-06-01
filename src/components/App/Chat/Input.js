import React from 'react';
import './__styles__/Input.scss';

const Input = () => {
    return (
        <div className="Input">
            <form className="InputForm">
                <input className="form-control"/>
                <button type="button" className="InputButton btn btn-light">Absenden</button>
            </form>
        </div>
    );
};

export default Input;
