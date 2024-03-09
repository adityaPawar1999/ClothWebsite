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

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './images/');//--------here images is folder name 
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${Date.now()}${ext}`);
  }
});
const uploadMiddleware = multer({ storage: storage });

router.get('/getData', getData);
router.post('/register', register);
router.post('/login', login);
router.post('/addProduct',  uploadMiddleware.single('productImage'), addProduct);

module.exports = router; // Corrected spelling of module.exports
