const user = require("../modals/user");
const bcrypt = require('bcrypt');

const getData = async (req, res) => {
    try {
        const result = await user.find();
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const demo = (req, res) => {
    res.send("deeoom doom dam doomm");
};

const register = async (req, res) => {
    try {
        const { Fname, Lname, Email, Password } = req.body;
        console.log(Fname)
        if (!Password) {
            return res.status(400).json({ error: 'Password is required' });
        }

        // Validate other password requirements if needed

        // Hash the password asynchronously using bcrypt
        const hashedPassword = await bcrypt.hash(Password, 10);

        const result = await user.create({
            Fname,
            Lname,
            Email,
            Password: hashedPassword
        });

        console.log("Data created successfully:", result);
        res.status(201).json(result);
    } catch (error) {
        console.error("Error creating data:", error);
        
        // Handle specific bcrypt errors
        if (error.name === 'MongoError' && error.code === 11000) {
            res.status(400).json({ error: 'Duplicate email. User already exists.' });
        } else {
            res.status(500).send("Internal Server Error");
        }
    }
};

module.exports = { getData, demo, register };
