const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    const user = {
        name: 'Sally',
        hobby:  'soccer'
    }
    res.send();
})

app.listen(3000)