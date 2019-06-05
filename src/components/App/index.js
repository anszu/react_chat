import React from 'react';
import Navigation from './Navigation/';
import Chat from './Chat/';
import { AppContextProvider } from './AppContext.js';
import './App.scss';

const App = () => {
    return (
        <div className="App">
            <AppContextProvider value="1">
                <Navigation/>
                <Chat/>
            </AppContextProvider>
        </div>
    );
};

export default App;
