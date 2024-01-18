const express = require('express');
const connectToDatabase  = require('./Connection');
const app = express();
connectToDatabase();

const user = require('./modals/user');

app.get('/home' ,(req,res)=>{
    res.send("homepage")
    
});
app.post('/', async (req, res) => {
    console.log("we enter here");
    try {
        const result = await user.create({
            Fname: "aditya",
            Lname: "pawar",
            Email: "aditya12@gmail.com",
            Password: "10802160"
        });
        res.json(result)
        console.log("Data created successfully:", result);
        res.status(201).send("Data created successfully");
    } catch (error) {
        console.error("Error creating data:", error);
        res.status(500).send("Internal Server Error");
    }
});


app.listen(5000);