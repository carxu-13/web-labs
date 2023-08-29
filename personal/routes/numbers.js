const express = require('express');
var router = express.Router();


router.get('/numbers', function(req,res) {
    console.log('numbers')
       var obj = {
       'nums': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
                20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
                30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
                40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
                50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
                60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
                70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
                80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
                90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
                100]
   }
   res.render('numbers', obj);
});



router.get('/numbers/:num', function(req,res){
	
	console.log(req.params.num);
	var obj = {
	    'num' : req.params.num,
	    'square_root' : Math.sqrt(req.params.num),
	    'log_base2' : Math.log2(req.params.num),
	    'squared' : req.params.num * req.params.num
	}
	var checkInt = Number.isInteger(req.params.num) 
	var checkNeg = req.params.num > 0
	console.log(checkInt);
    console.log(checkNeg);
		if(checkInt || checkNeg) {
		 res.render('num_tables', obj);
		 if('format' in req.query) {
		    if( req.query.format == 'json')
		        return res.json(obj);
		 }
	}
	    else 
	        res.render('errors');
	//res.json(obj);
	   
})

module.exports = router;
