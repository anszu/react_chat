import React, { Component } from 'react';
import Navigation from './Navigation/';
import Chat from './Chat/';
import './App.scss';

export default class App extends Component {
    constructor () {
        super();
        this.state = {
            channelId: 2
        };
    }

    render () {
        return (
            <div className="App">
                <Navigation/>
                <Chat/>
            </div>
        );
    }
}
