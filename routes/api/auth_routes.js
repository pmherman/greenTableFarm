const router = require("express").Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../../models');
const db = require("../../models");


// passport.authenticate() --> Logs the user in after checking user information
passport.use(new LocalStrategy({
    usernameField: 'email'
},  (email, password, done) => {
    db.User.findOne({email: email})
        .then(user => {
            if ( !user ) done(null, false); // if user doesn't exist then fail login

            // now need to make sure password given is correct
            if ( !user.comparePassword(password) ) done(null, false);

            // if they pass these checks, we can log them in
            done(null, {
                // Saving to the req object to pass across the site
                id: user._id,
                email: user.email
            });
        });
}));

passport.serializeUser(function (user_id, done) {
    done(null, user_id);
});

passport.deserializeUser(function (user_id, done) {
    done(null, user_id);
});


// I think these are written in userController.js
// Routes

// Creating a new user
// This is handled in userController.js
router.post('/register', (req, res) => {
    User.create(req.body)
        .then(user => {
            req.login({
               id: user._id,
               email: user.email
            }, err => {
                if ( err ) return res.status(500).send({error: err});

                res.send(req.user);
            });
        }).catch(err => res.status(500).send({error: "User could not be created."}));
});

// This is not being called at all
// Loggin in exisitng user
router.post('/api/authroutes', (req, res) => {
    console.log("request " + res);
    console.log("this is being run!");
    // Pass req so can break down req.body into email and password
    passport.authenticate('local')(req, res, result => {
        res.status(200).send(req.user);
    })
});

module.exports = router;