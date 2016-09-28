var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser')
var app = express();

var routes = express.Router();

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

routes.get('/', function (req, res) {
  res.render('homepage.ejs');
});

routes.post('/', urlencodedParser,function (req, res) {
	console.log("Hello " + req.body.username + " !");
});

routes.get('/accueil', function (req, res) {
  res.send('PAGE POUR LES TWEETS SAUVER !!!');
});

routes.get('/TweetSave', function (req, res) {
  res.send('PAGE POUR LES TWEETS SAUVER !!!');
});


module.exports = routes;
