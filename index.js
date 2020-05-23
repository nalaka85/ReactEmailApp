
//Import express library node JS currently has access to common js  in react you have eg import express from express
const express = require('express');
const app = express(); //inside one app you can have mny
// Route Handler
app.get('/', (req, res) => {  // req incoming request res is the response
    res.send({ hi: 'there' });  //send this response

});
const PORT = process.env.PORT || 5000; // process.env is there for Heroku and 5000 is there for the environment (default value)
app.listen(PORT); //tells node that it listens to port 5000
