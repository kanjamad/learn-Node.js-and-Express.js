const fs = require('fs')

fs.readFile('./hello.txt',(err, data) => {
    if (err) {
        console.log('errrrrroooorrr');
    }
    console.log('1.Async', data.toString('utf8'));
})

const file = fs.readFileSync('./hello.txt');
console.log('2.Sync', file.toString());


// APPEND, add something to it
// fs.appendFile('./hello.txt', ' This is so cool!', err => {
//     if (err) {
//         console.log(err);
//     }
// })


// WRITE
fs.writeFile('bye.txt', 'sad to see you go', err => {
    if (err)
    console.log(err);
})

