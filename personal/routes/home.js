const express = require('express');
var router = express.Router();


router.get('/it_works',function(req,res){
   console.log('someone is landing on my page');
   res.render('works_template');
      var obj = {
     'somekey' : 'First'
   }
   res.render('works_template', obj);
 });
 
router.get('/second', function(req,res){
   var obj = {
     'somekey' : 'Hello World, it works!'
   }
   res.render('second_template', obj);
});

router.get('/third', function(req,res){
   var obj = {
             'message' : 'Hello World, it works!',
             'delay_time' : 1000
   }
   res.render('wait_template', obj);
});

router.get('/something_styled',function(req,res){
    var obj = {
        'message' : 'Hello World, it works!'
    }

  res.render('css_file', obj)

})

router.get('/chance',function(req,res){
    var obj1 = {
      'message' : 'Hello World, you won!'
    }
    var obj2 = {
        'message' : 'Hello World, you lost!'
    }
    var r = Math.random() > 0.5
    if(r)
      res.render('win', obj1)
    else
      res.render('win', obj2)

})

router.get('/list_render', function(req,res){
   var obj = {
       'thingz': ["Pencils", "Pens", "Erasers"]
   }
   res.render('list', obj);
});


module.exports = router;
