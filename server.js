// DEPENDENCIES
	var dotenv = require('dotenv').load();
	var express = require('express');
	// var passport = require('passport');
	// var cookie = require('cookie-parser');
	var bodyParser = require('body-parser');
	// var session = require('express-session');
	var cors = require('cors');

// EXPRESS
	var app = express();

// ENVIRONMENT VARIABLES
	var port = 8888;
	var onlinePort = process.env.EXPRESS_PORT;
	// var CALLBACK_URL = process.env.CALLBACK_URL;

// MIDDLEWARE
	// app.use(cookie());
	app.use(bodyParser.json());
	// app.use(session({ secret: '76uhdrf34efds' }));
	// app.use(passport.initialize());
	// app.use(passport.session());
	app.use(express.static(__dirname + '/public'));
	app.use(cors());  

// LISTENING
	app.listen(onlinePort || port, function() {
	  console.log('Listening on port ', port);
	});