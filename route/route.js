
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser")

var passport = require('passport')
var TwitterStrategy = require('passport-twitter').Strategy;

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var TWITTER_CONSUMER_KEY = 'KgaIRtD7PvQhFdIRxZ8RONfQM'
var TWITTER_CONSUMER_SECRET = 'OQeF0MDulyM1Vx93NJpxoe2SsHIrWRlkJ70ISriodxTPbKkceq'

router.get('/', function (req, res) {
  res.render('homepage.ejs');
});

//

    passport.use(new TwitterStrategy({
        consumerKey: TWITTER_CONSUMER_KEY,
        consumerSecret: TWITTER_CONSUMER_SECRET,
        callbackURL: "http://localhost/auth/twitter/callback"
      },
      function(token, tokenSecret, profile, done) {
       /* User.findOrCreate(..., function(err, user) {
          if (err) { return done(err); }
          done(null, user);
        });*/
        User.findOne({
            'twitter.id': profile.id 
        }, function(err, user) {
            if (err) {
                return done(err);
            }
            //No user was found... so create a new user with values from Facebook (all the profile. stuff)
            if (!user) {
                user = new User({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    username: profile.username,
                    provider: 'twitter',
                    //now in the future searching on User.findOne({'facebook.id': profile.id } will match because of this next line
                    facebook: profile._json
                });
                user.save(function(err) {
                    if (err) console.log(err);
                    return done(err, user);
                });
            } else {
                //found user. Return
                return done(err, user);
            }
        });
      }
    ));
router.post('/login_check', urlencodedParser,function (req, res) {
	console.log("Hello " + req.body.username + " !");
});

router.get('/auth/twitter', passport.authenticate('twitter'));

router.get('/auth/twitter/callback',
  passport.authenticate('twitter', { successRedirect: '/accueil',
                                     failureRedirect: '/' }));

router.get('/accueil', function (req, res) {
  res.send('PAGE LISTE TWEETS !!!');
});

router.get('/TweetSave', function (req, res) {
  res.send('PAGE POUR LES TWEETS SAUVER !!!');
});

module.exports = router;
