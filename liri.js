require("dotenv").config();
var axios = require("axios");
var keys = require("./keys.js");
var moment = require('moment');

// var spotify = new Spotify(keys.spotify);

// console.log(keys.spotify)

function searchBandsInTown(artist) {
    var apiStr = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    //call bandsintown API via axios with the search string
    axios.get(apiStr).then(function (response) {
        // console.log("Response", response.data[1])
        var info = response.data;

        //loop over response object array, extract useful stuff
        for (var i = 1; i < info.length; i++) {
            console.log("\n********************")
            console.log("Venue:", info[i].venue.name)
            console.log("City:", info[i].venue.city + ",", info[i].venue.country)
            console.log("Date:", moment(info[i].datetime).format("MM" + "/" + "DD" + "/" + "YYYY"))
            console.log("********************")

        }
    })
        .catch(function (error) {
            console.log("Error", error)
        })
}

var command = process.argv[2]

if (command === "concert-this") {
    var artist = "";
    //loop over process.argv for index 3+ to get artis/band name
    for (var i = 3; i < process.argv.length; i++) {
        artist += process.argv[i];
        //add a "+" if it's not the last element in artist's name
        if (i < process.argv.length - 1) {
            artist += "+";
        }
    }
    searchBandsInTown(artist);
} else if (command === "spotify-this-song") {
    
}
