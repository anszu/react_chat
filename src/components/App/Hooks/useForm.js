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

    const changeCreator = (UserName) => {
        if (values.creator !== UserName) {
            setValues({ ...values, creator: UserName });
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
                });
        }
    };

    return {
        values,
        handleChange,
        handleSubmit,
        handleClick,
        changeCreator
    };
};

export default useForm;
