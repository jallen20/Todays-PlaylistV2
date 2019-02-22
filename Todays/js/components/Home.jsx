import React, { Component } from 'react';
import Login from './../handlers/Login.jsx';

const login = new Login();
class Home extends Component {
    constructor(props) {
        super(props);
    }

    

    render() {
        return (
            <div>
                <h1>Today's Playlist</h1>
                <h3>Custom playlist designed specifically for your taste</h3>
                <img alt="ego" src="../images/spot.svg" />
                <h4>Powered by Spotify&trade;</h4>
                <button id="connect" type="button" onClick={login._login}>
                    <img alt="spot" src="../images\spotify-icons-logos\spotify-icons-logos\icons\01_RGB\02_PNG\Spotify_Icon_RGB_White.png" />
                    Connect With Spotify
            </button>
            </div>
        );
    }
}
export default Home;

