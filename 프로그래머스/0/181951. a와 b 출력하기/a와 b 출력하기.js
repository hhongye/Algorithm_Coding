const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const a = input[0]; //입력 받음
    const b = input[1];
    console.log('a = ' + a); //입력받은 a
    console.log('b = ' + b); //입력받는 b
});