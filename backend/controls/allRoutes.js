const user = require("../modals/user");
const Product = require('../modals/product')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const path = require('path');
const fs = require('fs');


const secretKey = 'adityaPawar'

const getData = async (req, res) => {
    try {
        jwt.verify(req.token, secretKey, (err, authData) => {
            if (err) {
                res.json(' ');
            } else {
                res.json("authData");
            }
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
};


const register = async (req, res) => {
    try {
        const { Fname, Lname, Email, Password , gender} = req.body;
        console.log(Fname)
        if (!Password) {
            return res.status(400).json({ error: 'Password is required' });
        }
        const hashedPassword = await bcrypt.hash(Password, 10);
        const result = await user.create({
            Fname,
            Lname,
            Email,
            Password: hashedPassword,
            gender:gender
        });
        console.log("Data created successfully:", result);
        res.status(201).json(result);
    } catch (error) {
        console.error("Error creating data:", error);
        
        if (error.name === 'MongoError' && error.code === 11000) {
            res.status(400).json({ error: 'Duplicate email. User already exists.' });
        } else {
            res.status(500).send("Internal Server Error");
        }
    }
};

const login = async (req, res) => {
    const { Email, Password } = req.body;
    try {
        const validUser = await user.findOne({ Email });

        if (validUser) {
            const passwordMatch = await bcrypt.compare(Password, validUser.Password);
            if (passwordMatch) {
                const token = jwt.sign({ userId: validUser._id, email: validUser.Email, gender: validUser.gender }, secretKey, { expiresIn: '1h' });
                res.cookie('token', token).json(validUser._id);
            } else {
                console.log("Invalid password");
                res.status(401).json("Invalid password");
            }
        } else {
            console.log('User not found');
            res.status(404).json("User not found");
        }
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal Server Error");
    }
};

const addProduct = async (req, res) => {
    try {
        const { name, prize, company, categories, Description } = req.body;
        
        // Check if a file is uploaded
        if (!req.file) {
            return res.status(400).json('No file uploaded');
        }
        
        const image = req.file.filename; 
        
        const result = await Product.create({
            name,
            prize,
            company,
            categories,
            image,
            Description
        });

        if (result) {
            console.log("Data saved successfully...!");
            res.json(result); 
        } else {
            res.status(500).json('Unable to save data');
        }
    } catch (e) {
        console.error("Error creating data:", e);
        res.status(500).json('Internal Server Error'); 
    }
};

module.exports = { getData, login, register ,addProduct};
