const express = require('express');
var router = express.Router();


router.get('/kritika', function(req,res){
    console.log('kritika!!!!')
   res.render('kritikyuh');
});

module.exports = router;
