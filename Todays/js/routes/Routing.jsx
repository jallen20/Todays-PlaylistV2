import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, HashRouter as Router } from 'react-router-dom'
import Home from './../components/Home.jsx'
import Playlist from './../components/Playlists.jsx'
import App from '../components/App.jsx';
const routing = (
    <Router>
        <div>
            <div id="top">
                <Link to="/home">Home</Link>
                <Link to="/playlist">Playlist</Link>
            </div>
            <div id="content-container" className="fader">
                <Route path="/view/" component={App} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/playlist" component={Playlist} />
            </div>
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))