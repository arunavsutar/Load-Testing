//If we want to modularize the routes then we can use the express routers.
//It is used to create modular mountable route handler

const express = require('express');
const v1Router = require('./v1');

const router = express.Router();

router.use('/v1', v1Router);
module.exports = router;