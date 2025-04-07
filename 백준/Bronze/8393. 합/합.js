const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split("\n");

const n = parseInt(fileData[0]);

let sum = 0;
let i = 1;
while(i <= n){
  sum += i;
  i++;
} 
console.log(sum);