const user = require("../modals/user");

const getData = async (req, res) => {
    try {
        const result = await user.find();
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const demo =  (req, res) => {
    res.send("deeoom doom dam doomm");
};


const register = async (req, res) => {
    try {
        const { Fname , Lname , Email , Password } = req.body;

        const result = await user.create({
            Fname,
            Lname,
            Email,
            Password
        });

        console.log("Data created successfully:", result);
        res.status(201).json(result);  // Send JSON response with the created data
    } catch (error) {
        console.error("Error creating data:", error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = {getData ,  demo , register}