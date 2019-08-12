import React, { useContext, useEffect, useState } from 'react';
import * as CONST from '../constants';
import useGetAPI from '../Hooks/useGetAPI';
import { AppContext } from '../AppContext';
import PropTypes from 'prop-types';
import './__styles__/Content.scss';

const Content = ({ children }) => {
    // get channel id from context
    const { ChannelId } = useContext(AppContext);

    // set state for timestamp param and array of sorted values
    const [TimestampParam, setTimestampParam] = useState('');
    const [sortedValues, setSortedValues] = useState([]);

    // call get hook
    const { values } = useGetAPI(CONST.API_ITEM_MESSAGES,
        `${CONST.API_PARAM_CHANNELS}/${ChannelId}/${CONST.API_PARAM_MESSAGES}${TimestampParam}`,
        CONST.REFRESH_MESSAGES);

    // sort values by their id's to always get the same order
    // this is due to a API malfunction, providing values in different orders
    const sortValues = () => {
        let arr = [];
        if (values.data) {
            values.data.forEach(element => {
                arr[element.id] = element;
            });
        }
        // store into state object
        setSortedValues(arr.filter((el) => (el != null)));
    };

    // use effect hook after rendering
    useEffect(() => {
        // if values are set, sort them
        if (values) {
            sortValues();

            // if there isnt a timestamp provided and the values have been sorted
            // reset the timestamp state to force a new call of the api
            if (!TimestampParam && sortedValues.length > 0) {
                let arr = sortedValues;
                setTimestampParam(`?lastSeenTimestamp=${encodeURI(arr.shift().timestamp)}`);
            }
        }
    }, [values]);

    // call rendering prop function
    return (
        <div className="Content" id="Content">
            { sortedValues && children(sortedValues) }
        </div>
    );
};

// prop definitions
Content.propTypes = {
    children: PropTypes.func
};

export default Content;
