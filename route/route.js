var express = require('express');
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