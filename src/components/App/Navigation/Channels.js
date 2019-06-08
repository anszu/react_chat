import React, { useState } from 'react';
import AddUserName from './AddUserName';
import useAPI from '../Hooks/useAPI';
import PropTypes from 'prop-types';
import './__styles__/Channels.scss';

const Channels = ({ ChannelId, UserName, changeChannelInfo }) => {
    const { values } = useAPI('channelList', '', 10000);
    const [currentChannel, setCurrentChannel] = useState(ChannelId);

    const handleClick = (event) => {
        let elems = document.querySelectorAll(".ChannelsElement.ChannelsElement--active");
        elems.forEach((el) => {
            el.classList.remove('ChannelsElement--active');
        });
        event.currentTarget.classList.add('ChannelsElement--active');
        setCurrentChannel(parseInt(event.currentTarget.id, 10));
    };

    const handleSubmit = (values) => {
        changeChannelInfo(currentChannel, values.username);
    };

    return (
        <div className="Channels">
            <div className="ChannelsUser">eingeloggt als {UserName}</div>
            { values &&
                <ul className="ChannelsList">
                    { values.data.map((item) => {
                        if (item.name) {
                            return (
                                <li key={item.id}
                                    id={item.id}
                                    className={
                                        `ChannelsElement 
                                        ${ChannelId === item.id ? 'ChannelsElement--active' : ''}`
                                    }
                                    onClick={handleClick}>
                                    <div className="ChannelsName">
                                        {item.name}
                                    </div>
                                    <span className="ChannelsTopic">
                                        {item.topic}
                                    </span>
                                    <AddUserName UserName={UserName} handleUserSubmit={handleSubmit}/>
                                </li>
                            );
                        }
                    })}
                </ul>
            }
        </div>
    );
};

Channels.propTypes = {
    UserName: PropTypes.string,
    ChannelId: PropTypes.number,
    changeChannelInfo: PropTypes.func
};

export default Channels;
// export default withData(Channels, 'channelList', '', 10000);
