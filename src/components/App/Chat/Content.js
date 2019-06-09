import React, { useEffect, useContext } from 'react';
import Message from './Message';
import * as CONST from '../constants';
import useGetAPI from '../Hooks/useGetAPI';
import { AppContext } from '../AppContext';
import './__styles__/Content.scss';

const Content = () => {
    const { ChannelId } = useContext(AppContext);
    const { values } = useGetAPI('messageList', `/channels/${ChannelId }/messages`, CONST.REFRESH_MESSAGES);

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

export default Content;
