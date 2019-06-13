import React, { useState } from 'react';
import * as CONST from '../constants';

const usePostAPI = (presetValues, ApiParam, callbackSubmit = false) => {
    const [values, setValues] = useState(presetValues);
    const [result, setResult] = useState();

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

    const handleSubmitWithCallback = (event) => {
        event.preventDefault();
        callbackSubmit(values);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${CONST.API_POST_URL}/${ApiParam}`, {
            method: 'POST',
            headers: CONST.API_HEADERS,
            body: JSON.stringify(values)
        })
            .then((res) => {
                // cleanup values
                setValues(presetValues);
                setResult(res.status);
            });
    };

    return {
        values,
        handleChange,
        handleSubmit,
        handleSubmitWithCallback,
        handleClick,
        updateValue,
        result
    };
};

export default usePostAPI;
