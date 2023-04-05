var express = require('express');
const { getCustomersController } = require('../controllers/customer.controller');
var router = express.Router();

router.get('/getCustomers',getCustomersController)

module.exports = router