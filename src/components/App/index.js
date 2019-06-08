import React, { useState } from 'react';
import Navigation from './Navigation/';
import Chat from './Chat/';
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
            <Navigation ChannelId={ChannelId} changeChannelInfo={changeChannelInfo} UserName={UserName}/>
            <Chat ChannelId={ChannelId} UserName={UserName}/>
        </div>
    );
};

export default App;
