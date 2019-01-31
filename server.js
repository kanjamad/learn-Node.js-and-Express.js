const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send("helloooooooooooo");
})

app.listen(3000)