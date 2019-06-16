import React, { useState, useContext } from 'react';
import AddUserName from './AddUserName';
import ChannelItem from './ChannelItem';
import ChannelNavigation from './ChannelNavigation';
import AddChannel from './AddChannel';
import useGetAPI from '../Hooks/useGetAPI';
import { AppContext } from '../AppContext';
import * as CONST from '../constants';
import './__styles__/Channels.scss';

const Channels = () => {
    // get channel id, username and changechannelinfo function from context
    const { ChannelId, UserName, changeChannelInfo } = useContext(AppContext);

    // set state for channel id and api param
    const [currentChannel, setCurrentChannel] = useState(ChannelId);
    const [currentAPIParam, setCurrentAPIParam] = useState('channels');

    // call get hook
    const { values } = useGetAPI('channelList', currentAPIParam, CONST.REFRESH_CHANNELS);

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
        setCurrentChannel(parseInt(target.id, 10));
    };

    // new username was submitted
    const handleSubmit = (values) => {
        if (!values.creator) { values.creator = UserName; }
        changeChannelInfo(currentChannel, values.creator);
    };

    // channel navigation was used
    const handleChannelNav = (event) => {
        event.preventDefault();
        setCurrentAPIParam(event.target.id);
    };

    // call subcomponents
    // integrate channel items by mapping through array provided by get hook
    return (
        <div className="Channels">
            <div className="ChannelsBar">
                <div className="ChannelsUser">eingeloggt als {UserName}</div>
                { values &&
                    <>
                        <ChannelNavigation handleClick={handleChannelNav} data={values.links}/>
                        <ul className="ChannelsList" id="ChannelsList">
                            { values.data.map((item) => {
                                if (item.name) {
                                    return (
                                        <ChannelItem
                                            item={item}
                                            ChannelId={ChannelId}
                                            handleClick={handleClick}
                                            key={item.id}>
                                            <AddUserName handleUserSubmit={handleSubmit}/>
                                        </ChannelItem>
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

