const express = require('express');
const todoRouter = require('./todo.routes');

const router = express.Router();

router.use('/todo', todoRouter);
module.exports = router;