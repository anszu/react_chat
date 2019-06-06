import React, { useState } from 'react';

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
        fetch(`http://34.243.3.31:8080/${ApiParam}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Group-Token': 'glvWcuOo6Rl7'
            },
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
