const express = require('express');
var router = express.Router();


router.get('/thank', function(req,res){
    console.log('thanks!!')
   res.render('thank_template');
});

module.exports = router;
