import React, { useState, useEffect } from 'react';
import * as CONST from '../constants';

const useGetAPI = (APIParam = '', RefreshTime = false) => {
    // set state for resultset values
    const [values, setValues] = useState();

    // define variable for interval
    let interval = false;

    // call API and get result data
    const callAPI = () => {
        fetch(`${CONST.API_GET_URL}/${APIParam}`, {
            headers: CONST.API_TOKEN
        })
            .then(res => res.json())
            .then((data) => {
                setValues(data);
            });
    };

    // use effect hook after rendering
    useEffect(() => {
        // if refresh is needed
        // set interval for repeating API call after first render
        if (RefreshTime) {
            interval = setInterval(callAPI, RefreshTime);
        } else {
            callAPI();
        }

        // clear interval at unmount
        return () => {
            if (interval) { clearInterval(interval); }
        };
    }, [APIParam]);

    // return functionalities
    return {
        values
    };
};

export default useGetAPI;

