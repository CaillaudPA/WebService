var express = require('express');
<<<<<<< HEAD
var router = express.Router();

var storage = [{
    id:1,
    firstname: "Tony",
    lastname: "Stark"
}];

router.get('/persons/:id', function (req, res, next) {
    var id = req.params.id;
    var person = storage[+id - 1];
    if (person === null) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    } else {
        res.json(person);
    }
});

router.get('/test', function (req, res) {
    res.send('nique bien ta mere');
});

router.route('/persons').post(function(req, res){
    var person ={};
    person.firstname = req.body.firstname;
    person.lastname = req.body.lastname;
    person.id = storage.length;

    storage.push(person);
    res.status(201);
    res.json(person);
});

module.exports = router;
=======
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
  res.send('PAGE LISTE TWEETS !!!');
});

routes.get('/TweetSave', function (req, res) {
  res.send('PAGE POUR LES TWEETS SAUVER !!!');
});


module.exports = routes;
>>>>>>> f862ffb3285030c55f8c62474be3d515b86a0c8a
