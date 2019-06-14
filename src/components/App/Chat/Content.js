import React, { useContext, useEffect, useState } from 'react';
import * as CONST from '../constants';
import useGetAPI from '../Hooks/useGetAPI';
import { AppContext } from '../AppContext';
import PropTypes from 'prop-types';
import './__styles__/Content.scss';

const Content = ({ children }) => {
    const { ChannelId } = useContext(AppContext);
    const [TimestampParam, setTimestampParam] = useState('');
    const [sortedValues, setSortedValues] = useState([]);
    const { values } = useGetAPI('messageList',
        `channels/${ChannelId}/messages${TimestampParam}`, CONST.REFRESH_MESSAGES);


    const sortValues = () => {
        let arr = [];
        if (values.data) {
            values.data.forEach(element => {
                arr[element.id] = element;
            });
        }
        setSortedValues(arr.filter((el) => (el != null)));
    };

    useEffect(() => {
        if (values) {
            sortValues();
            if (!TimestampParam && sortedValues.length > 0) {
                let arr = sortedValues;
                setTimestampParam(`?lastSeenTimestamp=${encodeURI(arr.shift().timestamp)}`);
            }
        }
    }, [values]);

    return (
        <div className="Content" id="Content">
            { sortedValues && children(sortedValues) }
        </div>
    );
};

Content.propTypes = {
    children: PropTypes.func
};

export default Content;
