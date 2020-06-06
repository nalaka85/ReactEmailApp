
//Import express library node JS currently has access to common js  in react you have eg import express from express
const express = require('express');
const mongoose = require('mongoose');

const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyPaser = require('body-parser')
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');



//mongoose.connect(keys.mongoURI);
//const authRoutes = require('./routes/authRoutes');
mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyPaser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
//authRoutes(app);
require('./routes/authRoutes')(app); // require auth routes returns a function with a call back functioh  with app function
require('./routes/billingRoutes')(app);
//inside one app you can have mny
// Route Handler
//app.get('/', (req, res) => {  // req incoming request res is the response
//  res.send({ hi: 'there' });  //send this response


//});
const PORT = process.env.PORT || 5000; // process.env is there for Heroku and 5000 is there for the environment (default value)
app.listen(PORT); //tells node that it listens to port 5000
