import React, { useState } from 'react';

import * as CONST from '../constants';

const usePostAPI = (apiParam = '', presetValues = {}) => {
    // set state for form values and api request result state
    const [values, setValues] = useState(presetValues);
    const [result, setResult] = useState();

    // handle click on form element
    const handleClick = (event) => {
        setValues({ ...values, [event.target.name]: '' });
    };

    // handle change of form value
    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    // handle submit of form and POST to API
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${CONST.API_POST_URL}/${apiParam}`, {
            method: 'POST',
            headers: CONST.API_HEADERS,
            body: JSON.stringify(values)
        })
            .then((res) => {
                // cleanup values and set result status
                setValues(presetValues);
                setResult(res.status);
            });
    };

    // update a value manually by calling this function
    const updateValue = (newValue, key) => {
        if (values[key] !== newValue) {
            setValues({ ...values, [key]: newValue });
        }
    };

    // return functionalities
    return {
        values,
        handleChange,
        handleSubmit,
        handleClick,
        updateValue,
        result
    };
};

export default usePostAPI;
