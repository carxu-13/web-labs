#!/usr/bin/nodejs

const express = require('express');
var router = express.Router();


router.get('/puppy_vote', function(req,res){
    console.log('puppy')
    res.render('puppy_vote');
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