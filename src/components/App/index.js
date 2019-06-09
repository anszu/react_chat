import React, { useState } from 'react';
import Channels from './Channels/';
import Chat from './Chat';
import { AppContextProvider } from './AppContext';
import './App.scss';

const App = () => {
    const [ChannelId, setChannelId] = useState(1);
    const [UserName, setUserName] = useState('guest');

    const changeChannelInfo = (ChannelId, UserName) => {
        setChannelId(ChannelId);
        setUserName(UserName);
    };

    return (
        <div className="App">
            <AppContextProvider value={{
                ChannelId: ChannelId,
                UserName: UserName,
                changeChannelInfo: changeChannelInfo }}>
                <Channels/>
                <Chat/>
            </AppContextProvider>
        </div>
    );
};

export default App;
