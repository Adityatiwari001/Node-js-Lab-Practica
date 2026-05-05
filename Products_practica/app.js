const express = require('express');
const mangoose = require('mongoose');
const Session = require('express-session');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});
s

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
