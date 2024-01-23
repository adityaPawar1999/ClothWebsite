const mongoose = require('mongoose'); // Erase if already required

var Product = new mongoose.Schema({
    prize:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    company:{
        type:String,
        required:true,
        unique:true,
    },
    categories:{
        type:String,
        required:true,
        unique:true,
    },
    image:{
        type:String,
        required:true,
    },
    Description:{
        type:String,
        required:true,
    },
});

//Export the model
module.exports = mongoose.model('Product', Product);