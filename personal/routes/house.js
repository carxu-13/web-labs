#!/usr/bin/nodejs

const express = require('express');
var router = express.Router();

const {  AuthorizationCode } = require('simple-oauth2');

const https = require('https');

//  PARAMATERS FROM ION
//  YOU GET THESE PARAMETERS BY REGISTERING AN APP HERE: https://ion.tjhsst.edu/oauth/applications/

var ion_client_id = 'dljYOsVwXUfD2OzFuKBqknc3jycfGrREc8f1nGBN';
var ion_client_secret = 'zko2mdLRojZg5FDqIawwmlfBQQ016uTWKsjHZ8j1tBJuG1B9yZskXK12MY6pnHVx1zRkB91JI0UZVq0XrY29d9qXpgArjivD8lulfGwMQrOBoHvPS7RbjmMixKokaqUG';
var ion_redirect_uri = 'https://user.tjhsst.edu/2023cxu/house';  //PROBS WRNOG LOL  //    <<== you choose this one

// Instantiate oauth2 class instance as a variable that we will use to manage out OAUTH operations

var client = new AuthorizationCode({
  client: {
    id: ion_client_id,
    secret: ion_client_secret,
  },
  auth: {
    tokenHost: 'https://ion.tjhsst.edu/oauth/',
    authorizePath: 'https://ion.tjhsst.edu/oauth/authorize',
    tokenPath: 'https://ion.tjhsst.edu/oauth/token/'
  }
});

// This is the link that will be used later on for logging in. This URL takes
// you to the ION server and asks if you are willing to give read permission to ION.

var authorizationUri = client.authorizeURL({
    scope: "read",
    redirect_uri: ion_redirect_uri
});

console.log(authorizationUri)

// -------------- END OAUTH CONFIG STUFF -------------- //


/*
- groups are stapler, pen, ruler, printer
- can only access voting stuff if oauth is logged in
- wait if not logged in: shows the groups but thats it -- pics of the groups but ?? for total num of votes
- so this means first page when /house is just a login or 'getout' button
- input text box to decide how many points to give to a group?
- always have total num of points for each group thing available
- button for people to check their own profile - this tells them how they voted
*/

router.get('/houses', function(req,res){
    console.log('house')
    res.render('house_page');
})

router.get('/puppy_results', function(req,res){
    var sqlQuery="";
    if(req.query.dogpic == "xb1" && req.query.choice == "Upvote") 
        sqlQuery = "UPDATE puppies SET upvote = upvote+1 WHERE name = 'xb1';"
    else if(req.query.dogpic == "xb1" && req.query.choice == "Downvote")
        sqlQuery = "UPDATE puppies SET downvote = downvote+1 WHERE name = 'xb1';"
    else if(req.query.dogpic == "xb2" && req.query.choice == "Upvote")
        sqlQuery = " UPDATE puppies SET upvote = upvote+1 WHERE name = 'xb2';"
    else if(req.query.dogpic == "xb2" && req.query.choice == "Downvote")
       sqlQuery = " UPDATE puppies SET downvote = downvote+1 WHERE name = 'xb2';"
    else if(req.query.dogpic == "xb3" && req.query.choice == "Upvote")
       sqlQuery = " UPDATE puppies SET upvote = upvote+1 WHERE name = 'xb3';"
    else if(req.query.dogpic == "xb3" && req.query.choice == "Downvote")
        sqlQuery = " UPDATE puppies SET downvote = downvote+1 WHERE name = 'xb3';"
    else if(req.query.dogpic == "xb4" && req.query.choice == "Upvote")
        sqlQuery = " UPDATE puppies SET upvote = upvote+1 WHERE name = 'xb4';"
    else if(req.query.dogpic == "xb4" && req.query.choice == "Downvote")
        sqlQuery = " UPDATE puppies SET downvote = downvote+1 WHERE name = 'xb4';"
    else {
        res.render('errors');
    }
      res.app.locals.pool.query(sqlQuery, function(error,results,fields){
        if (error) throw error;
        var sql = "SELECT name, upvote, downvote FROM puppies;";
        res.app.locals.pool.query(sql, function(error,results,fields){
        if (error) throw error;
        console.log(results)
        var render_dictionary = {
            'xb0_upv' : results[0].upvote,
            'xb0_downv' : results[0].downvote,
            'xb1_upv' : results[1].upvote,
            'xb1_downv' : results[1].downvote,
            'xb2_upv' : results[2].upvote,
            'xb2_downv' : results[2].downvote,
            'xb3_upv' : results[3].upvote,
            'xb3_downv' : results[3].downvote
        }
        console.log(render_dictionary);
        res.render('puppy_results', render_dictionary);
        })
    })
})




module.exports = router;