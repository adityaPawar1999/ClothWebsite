const { Router } = require("express");
const router = Router();  // Create an instance of the router
const { getData, register, login } = require('./../controls/allRoutes'); // Corrected the path

router.get('/get', getData);
router.post('/register', register);
router.post('/login', login);

module.exports = router;  // Corrected spelling to module.exports
