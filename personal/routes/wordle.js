const express = require('express');
const router = express.Router()

// built in module for working with files
const fs = require('fs')

// built in module for working with paths
const path = require('path')

var all_words = fs.readFileSync(path.join('/site','public','data','enable.txt')).toString().split('\n')

router.get('/wordle', function(req, res) {
    console.log('wordle')
    res.render('ajax_page')
})

router.get('/enable',function(req,res){
    var key =  (Object.keys(req.query)).toString()
    var pass = all_words.filter(function(elem) {
        return elem.length == key.length;
    }); 
    var passM = pass;
    for(let i = 0; i < pass.length; i++) {
        passM = passM.filter(function(elem){
            return elem.charAt(i) == key.charAt(i) || key.charAt(i)== "*";
        });
    }
    //excluded 
    // var pass6 = pass5.filter(function(elem){
    //     for(let i = 0; i < elem.length; i++)
    //         for(let j = 0; j < exc.length; j++)
    //             if(elem.charAt(i) == exc.charAt(j))
    //                 return false;
    //     return elem.charAt(0) == key.charAt(0);
    // });
    var params = {
        'possible-words' : passM
    } 
    res.json(params)
})


module.exports = router;