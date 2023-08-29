// import statement
var https = require('https');
const express = require('express');
var router = express.Router();

router.get('/weather_form', function(req,res) {
    console.log('weather')
    res.render('weather_form');
});
 
router.get('/form_render', function(req, res, next) {
    var lat = req.query.lat;
    var long = req.query.long;
    var url = 'https://api.weather.gov/points/' + lat + ',' + long;
    var options = { 
	    headers : {
		'User-Agent': 'request'
	    }
    }
    https.get(url, options, function(response) {
	    var rawData = '';
	    response.on('data', function(chunk) {
		    rawData += chunk;
	    });
		response.on('end', function() {
            var obj = JSON.parse(rawData);
            if(obj.properties) {
                res.locals.city = obj.properties.relativeLocation.properties.city;
                res.locals.state = obj.properties.relativeLocation.properties.state;
                if(obj.properties.forecast === null)
                    res.render('errors');
                else {
                    res.locals.forecast = obj.properties.forecast;
                    next();
                }
            }
            else
                res.render('errors');
        });
    }).on('errors', function(e) {
    	res.render('errors');
    })
}, function(req, res){
    var options = { 
		headers : {
			'User-Agent': 'request'
		}
	}
	var forecast = res.locals.forecast;
    https.get(forecast, options, function(response) {
	    var rawData1 = '';
	    response.on('data', function(chunk) {
		    rawData1 += chunk;
	    });
		response.on('end', function() {
            var obj1 = JSON.parse(rawData1);
            res.locals.weeklyWeather = obj1.properties.periods;
            dateTime = obj1.properties.periods[0].startTime;
            arr = dateTime.split("T");
            res.locals.date = arr[0];
            var render_dictionary = {
                'date' : res.locals.date,
                'city' : res.locals.city,
                'state' : res.locals.state,
                'weather' : res.locals.weeklyWeather
            }
            res.render('weather', render_dictionary);
		});
		}).on('errors', function(e) {
    	res.render('errors');
    })
})

module.exports = router;


