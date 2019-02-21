import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router';

const App = () => (
    <Router>
        <div id="top">
        <Link to="/view/">Home</Link>
        <Link to="playlist">Playlists</Link>
        </div>
    </Router>
)