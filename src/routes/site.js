var express = require('express');
var router = express.Router();
var indexController = require('../controllers/site');

router.get("/", indexController.getHomepage);


module.exports = router;