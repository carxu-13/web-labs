const express = require('express');
var router = express.Router();


router.get('/someform', function(req,res){
    console.log('madlib')
   res.render('form_template');
});


router.post('/form_render',function(req,res){
    console.log(req.body)
    var pic;
    if(req.body.pic =='1')
        pic = "dog1"
    if(req.body.pic == '2')
        pic = "dog2"
    if(req.body.pic == '3')
        pic = "dog3"
    var obj = {
        'firstname' : req.body.first_name,
        'lastname' :  req.body.last_name,
        'adjective' :  req.body.adjective,
        'verb' :  req.body.verb,
        'pic' :  pic,
        'color' : req.body.color
    }
    res.render('get_template', obj);
});

module.exports = router;
