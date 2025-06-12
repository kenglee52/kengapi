const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;
const router = require('./routes/router');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router);

app.listen(port, () => {
    console.log('Server is running on port 3000');
});