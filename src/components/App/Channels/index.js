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
    const { ChannelId, UserName, changeChannelInfo } = useContext(AppContext);
    const [currentChannel, setCurrentChannel] = useState(ChannelId);
    const [currentAPIParam, setCurrentAPIParam] = useState('/channels');
    const { values } = useGetAPI('channelList', currentAPIParam, CONST.REFRESH_CHANNELS);

    // channel was clicked
    const handleClick = (event) => {
        const target = event.currentTarget;
        const elems = document.querySelectorAll(`.ChannelItem.ChannelItem--active`);

        elems.forEach((el) => {
            el.classList.remove(`ChannelItem--active`);
        });
        target.classList.add(`ChannelItem--active`);
        setCurrentChannel(parseInt(target.id, 10));
    };

    // new username was submitted
    const handleSubmit = (values) => {
        changeChannelInfo(currentChannel, values.creator);
    };

    // channel navigation was used
    const handleChannelNav = (event) => {
        event.preventDefault();
        setCurrentAPIParam(event.target.id);
    };

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

