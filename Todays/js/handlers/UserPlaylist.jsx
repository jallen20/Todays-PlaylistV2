'use strict';


class UserPlaylist {

    getUserPlaylist(accessToken) {

        return () => {
            $.ajax({
                url: "https://api.spotify.com/v1/me/playlists?offset=5&limit=20",
                type: "GET",
                contentType: "application/json",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": " Bearer " + accessToken
                },
                statusCode: {
                    404: () => {console.log(404)},
                    500: () => {console.log(500)},
                    200: () => {console.log(200)},
                    302: () => {console.log(302)}
                }

            });
        }
    }
}

export default UserPlaylist;