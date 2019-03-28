var axios = require("axios");

var movieSearch = function (title) {
    if (!title){
        title = "Mr.+Nobody";
    }
    var apiStr = "http://www.omdbapi.com/?apikey=" + process.env.OMDB_KEY + "&t=" + title;

    axios.get(apiStr).then(function (response) {
        var data = response.data;
        console.log("Title:", data.Title)
        console.log("Year:", data.Year)
        console.log("IMDB Rating:", data.Ratings[0].Value)
        console.log("Rotten Tomatoes Rating:", data.Ratings[1].Value)
        console.log("Production Country:", data.Country)
        console.log("Language:", data.Language)
        console.log("Plot:", data.Plot)
        console.log("Actors:", data.Actors)
    })
        .catch(function (error) {
            console.log("Error", error)

        })
}

module.exports = movieSearch;