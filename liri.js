const keys = require("./keys.js");
const rp = require("request-promise");
const Twitter = require("twitter");
const spotify = require("spotify");
// console.log(keys);

// Global Variables//=============================================================================================

const action = process.argv[2];
const client = new Twitter(keys.twitterKeys);

// Functions ==============================================================================================

    function getTweets() {
        const params = { screen_name: 'potus', count: 10 };
        client.get('statuses/user_timeline', params, function (error, tweets, response) {
            if (!error) {
                for (var i = 0; i < tweets.length; i++) {
                    console.log('%j \n', tweets[i].text);
                }
            }
        })
    }

// ======================================================================================================


// ================================================================================================================

// Movie-This Command//============================================================================================

if (action === 'movie-this') {

    var movieName = process.argv.slice(3, process.argv.length);

    rp({
        uri: "http://www.omdbapi.com/?t=" + movieName,
        json: true
    }).then((movie) => {
        // console.log(movie);
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

// Get Twiiter//============================================================================================

else if (action === 'my-tweets') {
    console.log("my-tweets");
    getTweets();
};




// ================================================================================================================