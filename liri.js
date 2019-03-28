require("dotenv").config();
var keys = require("./keys.js");
var bands = require("./bands")
var spotify = require("./spotify")

// var spotify = new Spotify(keys.spotify);

// console.log(keys.spotify)


var command = process.argv[2]

if (command === "concert-this") {
    var artist = getArg();
    bands(artist);
} else if (command === "spotify-this-song") {
    var song = getArg();
    spotify(song);    
}

function getArg(){
    var arg = "";
    //loop over process.argv for index 3+ to get the full argument
    for (var i = 3; i < process.argv.length; i++) {
        arg += process.argv[i];
        //add a "+" if it's not the last element in artist's name
        if (i < process.argv.length - 1) {
            arg += "+";
        }
    }
    return arg;
}