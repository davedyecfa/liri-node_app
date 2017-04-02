var keys = require("./keys.js");
var rp = require("request-promise");
var twitter = require("twitter");
var spotify = require("spotify");
// console.log(keys);

// Global Variables//=============================================================================================

const action = process.argv[2];



// ================================================================================================================

// Movie-This Command//============================================================================================

if (action === 'movie-this') {

    var movieName = process.argv.slice(3, process.argv.length);

    rp({
        uri: "http://www.omdbapi.com/?t=" + movieName,
        json: true
    }).then((movie) => {
        console.log(movie);
        console.log("Movie Title: " + movie.Title);
        console.log("Movie Year: " + movie.Year);
        console.log("IMBD Rating: " + movie.imdbRating);
        console.log("Country of Origin: " + movie.Country);
        console.log("Language: " + movie.Language);
        console.log("Plot: " + movie.Plot);
        console.log("Actors: " + movie.Actors);
        console.log("Rotten Tomatoes Rating: " + movie.Ratings[1]);
    }).catch((err) => {
        console.log("err")
    })


}







// ================================================================================================================