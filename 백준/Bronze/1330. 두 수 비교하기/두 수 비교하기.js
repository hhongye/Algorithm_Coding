const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");
//console.log(fileData);

const a = parseInt(fileData[0]); //1
const b = parseInt(fileData[1]); //2

console.log(a > b ? '>' : (a < b ? '<' : '=='));