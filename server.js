const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.get('/', (req, res) => {
    req.query
    req.body
    req.header
    req.params
    res.send("getting root");
});



app.listen(3000);