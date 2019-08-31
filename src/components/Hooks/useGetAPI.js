import React, { useState, useEffect } from 'react';

import * as CONST from '../../constants';

const useGetAPI = (apiParam = '', refreshTime = false) => {
    // set state for resultset values
    const [values, setValues] = useState();

    // define variable for interval
    let interval = false;

    // call API and get result data
    const callAPI = () => {
        fetch(`${CONST.API_GET_URL}/${apiParam}`, {
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
        if (refreshTime) {
            interval = setInterval(callAPI, refreshTime);
        } else {
            callAPI();
        }

        // clear interval at unmount
        return () => {
            if (interval) { clearInterval(interval); }
        };
    }, [apiParam]);

    // return functionalities
    return {
        values
    };
};

export default useGetAPI;
