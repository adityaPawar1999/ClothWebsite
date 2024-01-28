const mongoose = require('mongoose'); 

var userSchema = new mongoose.Schema({
    Fname:{
        type:String
    },
    Lname:{
        type:String
    },
    Email:{
        type:String
    },
    Password:{
        type:String
    },
    gender:{
        type:String
    }
});

module.exports = mongoose.model('User', userSchema);