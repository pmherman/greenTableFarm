const router = require("express").Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

// passport.authenticate() --> Log the user in after checking user information
passport.use(new LocalStrategy({
    usernameField: 'email'
},  (email, password, done) => {
    User.findOne({email: email})
        .then(user => {
            if ( !user ) done(null, false); // if user doesn't exist then fail login

            // now need to make sure password given is correct
            if ( !user.comparePassword(password) ) done(null, false);

            // if they pass these checks, we can log them in
            done(null, {
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


// Loggin in exisitng user
router.post('/login', (req, res) => {
    // Pass req so can break down req.body into email and password
    passport.authenticate('local')(req, res, result => {
        res.status(200).send(req.user);
    })
});

module.exports = router;