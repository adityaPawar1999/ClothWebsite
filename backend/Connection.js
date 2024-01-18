const mongoose = require('mongoose');

const connectToDatabase = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/clothsDatabase')
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error.message);
    });
};
module.exports =  connectToDatabase;
