var axios = require("axios");
var moment = require('moment');

var bands = function(artist) {
    var apiStr = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    //call bandsintown API via axios with the search string
    axios.get(apiStr).then(function (response) {
        var info = response.data;

        if (info.length  === 0) {
            console.log("Not touring right now, sorry.")

        } else {

            //loop over response object array, extract useful stuff
            for (var i = 1; i < info.length; i++) {
                console.log("\n********************")
                console.log("Venue:", info[i].venue.name)
                console.log("City:", info[i].venue.city + ",", info[i].venue.country)
                console.log("Date:", moment(info[i].datetime).format("MM" + "/" + "DD" + "/" + "YYYY"))
                console.log("********************")

            }
        }
    })

        .catch(function (error) {
            console.log("Error", error)
        })
}

module.exports = bands;