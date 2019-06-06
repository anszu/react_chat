import React, { useState } from 'react';
import * as CONST from '../constants';

const useForm = (presetValues, ApiParam, staticValues = []) => {
    const [values, setValues] = useState(presetValues);

    const handleClick = (event) => {
        setValues({ ...values, [event.target.name]: '' });
    };

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
        console.log(values);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${CONST.API_POST_URL}/${ApiParam}`, {
            method: 'POST',
            headers: CONST.API_HEADERS,
            body: JSON.stringify(values)
        })
            .then((res) => {
                // cleanup values, spare static values
                Object.keys(values).forEach((key) => {
                    if (!staticValues.includes(key)) {
                        values[key] = '';
                    }
                });
                setValues({ ...values });
            });
    };

    return {
        values,
        handleChange,
        handleSubmit,
        handleClick
    };
};

export default useForm;
