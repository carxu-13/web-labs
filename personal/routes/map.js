const express = require('express');
const router = express.Router()

// built in module for working with files
const fs = require('fs')

// built in module for working with paths
const path = require('path')

var all_words = fs.readFileSync(path.join('/site','public','data','enable.txt')).toString().split('\n')

router.get('/game', function(req, res) {
    console.log('game')
    res.render('game')
})

router.get('/state', function(req, res) {
    var input = req.query.getState;
    console.log("State: " + input);
    
    var params = {
        'state' : input,
    };
    console.log(params);
    res.json(params);
});


module.exports = router;