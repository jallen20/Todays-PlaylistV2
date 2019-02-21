import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return  ( <div><h1>Today's Playlist</h1>
            <h3>Create and listen to your favorite Spotify Playlist's.<br />A custom playlist made just for you.</h3>
            <a href="/login"><button type="submit">Connect With Spotify</button></a>
            </div>
    );

    }
}

export default Login;
