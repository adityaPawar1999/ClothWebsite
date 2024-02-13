const { Router } = require("express");
const router = Router();
const { getData, register, login, addProduct } = require('./../controls/allRoutes');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const path = require('path');
const fs = require('fs');


const verifyToken = (req, res, next) => {
    try {
        const token = req.headers['authorization'];
        if (token !== undefined) {
            const breakToken = token.split(' ');
            const realToken = breakToken[1];
            req.token = realToken;
            console.log("Token is verified");
            next();
        } else {
            console.log("Token not verified");
            res.json('Token not provided');
        }
    } catch (error) {
        console.error(error);
        res.json('Token not provided');
    }
}

router.get('/getData', getData);
router.post('/register', register);
router.post('/login', login);
router.post('/addProduct', upload.single('image'), addProduct);

module.exports = router; // Corrected spelling of module.exports
