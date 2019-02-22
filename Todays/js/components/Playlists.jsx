import React from 'react';

class Playlist extends React.Component {
    constructor(props) {
        super(props);
        'use strict';

        var url = new URL(window.location.href);
        if (url.hash !== null || typeof (url.hash) !== 'undefined')
            this.props.accessToken = url.hash.split("=")[1];

        this.state = {
            playlists: {}
        };
    }

    componentDidMount() {
        $("#hold-load").css("display", "block");
        let settings = {
            url: "https://api.spotify.com/v1/me/playlists?offset=5&limit=20",
            type: "GET",
            contentType: "application/json",
            statusCode: {
                404: () => { console.log(404) },
                500: () => { console.log(500) },
                200: () => { console.log(200) },
                302: () => { console.log(302) }
            },
            headers: {
                "Authorization": " Bearer " + this.props.accessToken,
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            complete: () => { $("#hold-load").css("display", "none"); }
        };
        $.ajax(settings).done(res => this.setState({ playlists: res }));

    }




    render() { }
}

export default Playlist;