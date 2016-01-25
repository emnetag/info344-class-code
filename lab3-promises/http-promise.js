var http = require('http');

function get(url) {
    // Return a new promise
    return new Promise(function(resolve, reject) {
        // Do the usual request stuff
        http.get(url, function(res) {
            var body = '';
            res.on('data', function(chunk) {
                body += chunk;
            });
            res.on('end', function() {
                resolve(body);
            });
        }).on('error', function(err) {
            reject(err);
        });
    });
}

function getMovie(movieID) {
    var url = "http://www.omdbapi.com/?i=" + movieID + "&plot=short&r=json";
    get(url)
        .then(function(body) {
            console.log(body);
        })
        .catch(function(err) {
            console.err(err);
        });
}

function getThreeMovies(id1, id2, id3) {
    var reqURL = "http://www.omdbapi.com/?i=" + id1 + "&plot=short&r=json";
    get(reqURL)
        .then(JSON.parse)
        .then(function(body) {
            console.log(body);
            console.log('Fetching id2\n');
            reqURL = "http://www.omdbapi.com/?i=" + id2 + "&plot=short&r=json";
            return get(reqURL);
        })
        .then(JSON.parse)
        .then(function(body) {
            console.log(body);
            console.log('Fetching id3\n');
            reqURL = "http://www.omdbapi.com/?i=" + id3 + "&plot=short&r=json";
            return get(reqURL);
        })
        .then(function(body) {
            console.log(body);
        })
        .catch(function(err) {
            console.err(err);
        })
}

getThreeMovies("tt0120737", "tt0120730", "tt0120729");