const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");

const A = parseInt(fileData[0]);
const B = parseInt(fileData[1]);
const C = parseInt(fileData[2]);

console.log(A+B+C);