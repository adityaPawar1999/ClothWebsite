const { Router } = require("express");
const router = Router();  // Create an instance of the router
const { getData, register, login ,addProduct} = require('./../controls/allRoutes'); // Corrected the path

const verifyToken = (req, res, next) => {
    try {
        const token = req.headers['authorization'];
        if (token !== undefined) {
            const breakToken = token.split(' ');
            const realToken = breakToken[1];
            next();
        } else {
            res.json('Token not provided');
        }
    } catch (error) {
        res.json('Token not provided');
    }
}

router.get('/get', verifyToken, getData);
router.post('/register', register);
router.post('/login', login);
router.post('/addProduct', addProduct);

module.exports = router;  // Corrected spelling to module.exports
