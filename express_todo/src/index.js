const express = require('express');

const { PORT } = require('./config/server.config');
const router = require('./routes');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use('/api', router);

app.listen(PORT, () => {
    console.log("Started Server at PORT - ", PORT);
})