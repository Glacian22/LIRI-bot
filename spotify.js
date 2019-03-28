
var spotify = function (song) {


}

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});

var spotifySearch = function(song) {
    if(!song){
        song = "The+Sign+Ace+of+Base"
    }
    spotify.search({ type: 'track', query: song, limit: 1 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        
        var info = data.tracks.items[0];
        console.log("\n*****************")
        console.log("Artist/Band Name:", info.artists[0].name);
        console.log("Song Title:", info.name)
        console.log("Spotify Link:", info.external_urls.spotify)
        console.log("Album:", info.album.name)
        console.log("\n*****************")
    });
}
module.exports = spotifySearch;