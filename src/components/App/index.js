import React, { useState } from 'react';

import Channels from './Channels';
import Chat from './Chat';
import { AppContextProvider } from './AppContext';

import './App.scss';

const App = () => {
    // define states
    const [channelId, setChannelId] = useState(1);
    const [userName, setUserName] = useState('guest');

    // reset state for channel id and username
    const changeChannelInfo = (channelId, userName) => {
        setChannelId(channelId);
        setUserName(userName);
    };

    // call subcomponents with context provider
    return (
        <div className="App">
            <AppContextProvider value={{
                channelId: channelId,
                userName: userName,
                changeChannelInfo: changeChannelInfo }}>
                <Channels/>
                <Chat/>
            </AppContextProvider>
        </div>
    );
};

export default App;
