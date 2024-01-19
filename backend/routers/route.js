const { Router } = require("express");
const router = Router();  // Create an instance of the router
const { getData, register, demo } = require('./../controls/allRoutes'); // Corrected the path

router.get('/get', getData);
router.post('/register', register);
router.get('/demo', demo);

module.exports = router;  // Corrected spelling to module.exports
