#!/usr/bin/nodejs

// -------------- load packages -------------- //
// INITIALIZATION STUFF

var express = require('express');
var app = express();

var mysql = require('mysql');

var hbs = require('hbs');
app.set('view engine','hbs');

var cookieParser = require('cookie-parser')
app.use(cookieParser())

var cookieSession  = require('cookie-session')

app.use( cookieSession ({
  name: 'lock',
  keys: ['secret'],
}));

app.use(express.static('static_files'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


var sql_params = {
  connectionLimit : 10,
  user            : process.env.DIRECTOR_DATABASE_USERNAME,
  password        : process.env.DIRECTOR_DATABASE_PASSWORD,
  host            : process.env.DIRECTOR_DATABASE_HOST,
  port            : process.env.DIRECTOR_DATABASE_PORT,
  database        : process.env.DIRECTOR_DATABASE_NAME
}

app.locals.pool  = mysql.createPool(sql_params);


//---------------------------------------------------------

app.use(express.static('static'));


const home = require('./routes/home.js')
app.use(home);

const madlib = require('./routes/madlib.js')
app.use(madlib);

const numbers = require('./routes/numbers.js')
app.use(numbers);

const weather = require('./routes/weather.js')
app.use(weather);

const puppy = require('./routes/puppies.js')
app.use(puppy);

const wordle = require('./routes/wordle.js')
app.use(wordle);

const cookies = require('./routes/cookies.js')
app.use(cookies);

const oauth = require('./routes/oauth.js')
app.use(oauth);

const house = require('./routes/house.js')
app.use(house);

const map = require('./routes/map.js')
app.use(map);

const thank = require('./routes/thank.js')
app.use(thank);

const kritika = require('./routes/kritika.js')
app.use(kritika);


// -------------- listener -------------- //
// // The listener is what keeps node 'alive.' 

var listener = app.listen(process.env.PORT || 8080, process.env.HOST || "0.0.0.0", function() {
    console.log("Express server started");
});