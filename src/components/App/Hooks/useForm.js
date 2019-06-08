import React, { useState } from 'react';
import * as CONST from '../constants';

const useForm = (presetValues, ApiParam, callbackSubmit = false) => {
    const [values, setValues] = useState(presetValues);

    const handleClick = (event) => {
        setValues({ ...values, [event.target.name]: '' });
    };

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (callbackSubmit) {
            callbackSubmit(values);
        } else {
            fetch(`${CONST.API_POST_URL}/${ApiParam}`, {
                method: 'POST',
                headers: CONST.API_HEADERS,
                body: JSON.stringify(values)
            })
                .then((res) => {
                    // cleanup values
                    setValues(presetValues);
                });
        }
    };

    return {
        values,
        handleChange,
        handleSubmit,
        handleClick
    };
};

export default useForm;
