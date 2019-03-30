require("dotenv").config();
var keys = require("./keys.js");
var bands = require("./bands")
var spotify = require("./spotify")
var movie = require("./movie")
var fs = require('fs');

var command = process.argv[2]
var input = getInput();

runLiri(command, input)

function runLiri(command, input) {
    if (command === "concert-this") {
        bands(input);
    } else if (command === "spotify-this-song") {
        spotify(input);
    } else if (command === "movie-this") {
        movie(input);
    } else if (command === "do-what-it-says") {
        doWhatItSays();
    } else {
        console.log("Please enter a valid command")
    }
}
function getInput() {
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

function doWhatItSays() {
    fs.readFile('random.txt', "utf8", function (err, data) {
        if (err) {
            return console.log("Error:", err)
        }
        //turn the file string into variables to send into runLiri()
        var split = data.split(",");
        var command = split[0];
        var input = split[1].slice(1, split[1].length - 1)

        runLiri(command, input)
    })
}
