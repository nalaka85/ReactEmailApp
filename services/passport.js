const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});


passport.use(new GoogleStrategy({

    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true

}, (accessToken, refreshshToken, profile, done) => {
    User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {

            done(null, existingUser);
            // console.log(existingUser);
        }
        else {
            new User({ googleId: profile.id }).save().then(user => done(null, user));
            //  console.log(user);

        }
    });

    // console.log('accessToken', accessToken);
    // console.log('refreshshToken', refreshshToken);
    // console.log('profile:', profile);
    // console.log('done', done);


}
));  // passport.use is telling pasport that there is a new strategy available