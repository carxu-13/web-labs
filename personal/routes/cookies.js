const express = require('express');
const router = express.Router()

function init_session_cookies(req,res,next) {
	if (!('loggedIn' in req.session)) {
	    req.session.loggedIn = false;
	}
	next()
}

router.get('/cookies',function(req,res){
    
    var visits,clicks, user;
    
	// log the incoming cookies
	console.log( req.cookies )

	// has the clicks cookie been created?
	if (!('clicks' in req.cookies)) {
	    clicks = 0;
		res.cookie('clicks', 0)
	}  else {
	    clicks = Number(req.cookies.clicks);
	}

	// has the visits cookie been created?
	if (!('visits' in req.cookies)) {
		res.cookie('visits', 1)
	} else {
	    visits = Number(req.cookies.visits) + 1;
	    res.cookie('visits', visits)
	}
    if('user' in req.query) {
        req.session.user = req.query.user;
    }
    var params = {
        'clicks' : clicks,
        'visits' : visits,
        'loggedIn': req.session.loggedIn,
        'user' : req.session.user
    }
    console.log('params are' + params)
	   res.render('clicks', params)

})

// router.get('/cookielogin',function(req,res){
//     res.render('login', params)
// }



/*
general 
- two routes --> loggedIn or not loggedIn
- don't need to display number of views
- associates username with num of views? (i think this is where the deleting cookies on inspect comes in)
loggedIn means premium content
- display username in hbs
- same basic template ()
if not loggedIn, limit to 5 visits
- always present option to log in
- after 5 visits and not logged in --> don't let clicks iterate? 
- button to logout

*/

module.exports = router;