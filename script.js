const fs = require('fs')

fs.readFile('./hello.txt',(err, data) => {
    if (err) {
        console.log('errrrrroooorrr');
    }
    console.log('asynchronous;here’s the data', data.toString('utf8'));
})

const file = fs.readFileSync('./hello.txt');
console.log('synchronous', file.toString());


