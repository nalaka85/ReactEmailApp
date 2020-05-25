const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
//es 2015 const
const { Schema } = mongoose;
const userSchema = new Schema({
    googleId: String
});
mongoose.model('users', userSchema);