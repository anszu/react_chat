import React, { useState } from 'react';
import * as CONST from '../constants';

const usePostAPI = (presetValues, ApiParam, callbackSubmit = false) => {
    const [values, setValues] = useState(presetValues);

    const handleClick = (event) => {
        setValues({ ...values, [event.target.name]: '' });
    };

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const updateValue = (newValue, key) => {
        if (values[key] !== newValue) {
            setValues({ ...values, [key]: newValue });
        }
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
                    console.log(res);
                });
        }
    };

    return {
        values,
        handleChange,
        handleSubmit,
        handleClick,
        updateValue
    };
};

export default usePostAPI;
