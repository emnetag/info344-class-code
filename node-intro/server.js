'use strict';

//require modules
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

//create new express application
var app = express();

//log requests
app.use(morgan('dev'));

//parse JSON POST bodies
app.use(bodyParser.json());

//serve static files from /static
app.use(express.static(__dirname + '/static'));

app.get('/api/v1/users', function(req, res) {
    var users = [
        {
            email: "mail@mail.com",
            displayName: 'Test User'   
        }
    ];
    
    res.json(200, users);
});

app.post('/api/v1/users', function(req, res) {
    console.log(req.body);
    
    res.json({message: 'new user created'});
    // var user = {};
    // user.email = req.body.email;
    // user.displayName = req.body.displayName;
});


// //call this function for a GET on /time
// app.get('/time', function(req, res) {
//    res.setHeader('Content-Type', 'text/plain');
//    res.send(new Date()); 
// });

// Listen for HTTP requests on port 80
app.listen(80, function() {
   console.log("I'm just chilling on port %s", 80); 
});

