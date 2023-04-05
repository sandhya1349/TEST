const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const { endpoint } = require('../config');
const { poolPromise } = require('../database');
const customerRoute = require('../src/routes/customer.route')

module.exports = () => {
  poolPromise;
  const app = express();
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use((error, request, response, next) => {
    if (error !== null) {
      return response.json({ status: 401, message: "Invalid json", error: error });
    }
    next();
  });

  app.use(endpoint,customerRoute)
  return app;
}