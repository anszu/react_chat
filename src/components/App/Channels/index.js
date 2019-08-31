import React, { useContext } from 'react';

import AddUserName from './AddUserName';
import ChannelItem from './ChannelItem';
import AddChannel from './AddChannel';
import useGetAPI from '../../Hooks/useGetAPI';
import { AppContext } from '../../../AppContext';
import * as CONST from '../../../constants';

import './__styles__/Channels.scss';

const Channels = () => {
    // get channel id, username and changechannelinfo function from context
    const { channelId, userName, selectChannel } = useContext(AppContext);

    // call get hook
    const { values } = useGetAPI(CONST.API_PARAM_CHANNELS, CONST.REFRESH_CHANNELS);

    // channel was clicked
    const handleClick = (event) => {
        // select all currently active chanel items and remove active class
        const elems = document.querySelectorAll(`.ChannelItem.ChannelItem--active`);
        elems.forEach((el) => {
            el.classList.remove(`ChannelItem--active`);
        });

        // set active class to currently clicked channel item
        const target = event.currentTarget;
        target.classList.add(`ChannelItem--active`);

        // update channel id
        selectChannel(parseInt(target.id, 10));
    };

    // call subcomponents
    // integrate channel items by mapping through array provided by get hook
    return (
        <div className="Channels">
            <div className="ChannelsBar">
                <div className="ChannelsUser">
                    {CONST.DISPLAY_USERNAME}{userName}
                </div>
                <AddUserName/>
                { values &&
                    <>
                        <ul className="ChannelsList" id="ChannelsList">
                            { values.map((item) => {
                                if (item.name) {
                                    return (
                                        <ChannelItem
                                            item={item}
                                            channelId={channelId}
                                            handleClick={handleClick}
                                            key={item.id}/>
                                    );
                                }
                            })}
                        </ul>
                    </>
                }
            </div>
            <AddChannel/>
        </div>
    );
};

export default Channels;

