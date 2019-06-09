import React, { useEffect } from 'react';
import Message from './Message';
import * as CONST from '../constants';
import useGetAPI from '../Hooks/useGetAPI';
import PropTypes from 'prop-types';
import './__styles__/Content.scss';

const Content = ({ APIParam }) => {
    const { values } = useGetAPI('messageList', `/channels/${APIParam}/messages`, CONST.REFRESH_MESSAGES);

    useEffect(() => {
        const element = document.getElementById("Content");
        element.scrollTop = element.scrollHeight;
    });

    return (
        <div className="Content" id="Content">
            { values &&
                <>
                { values.data && values.data.reverse().map(item => {
                    return (
                        <Message key={item.id}
                            name={item.creator}
                            timestamp={item.timestamp}
                            content={item.content}/>
                    );
                })}
                </>
            }
        </div>
    );
};

Content.propTypes = {
    APIParam: PropTypes.number
};

export default Content;

// export default withData(Content, 'messageList', '1/messages', 1000);
