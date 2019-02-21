'use strict';

const clientId = '876ce3c2be4c4ae584eea907ffeb6e0b';
const scopes = 'user-read-private playlist-modify-public playlist-modify-private';
const redirectUri = 'http://localhost:5500/view/';

document.getElementById("connect").addEventListener("click", () =>
{
    window.location.replace('https://accounts.spotify.com/authorize' +
    '?client_id=' + clientId +
    '&redirect_uri=' + encodeURIComponent(redirectUri) +
    '&scope=' + encodeURIComponent(scopes) +
    '&response_type=token' + '&show_dialog=false');
});
