const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = parseInt(input[0]); 

const nStr = input[1].split(' '); 

const num = []; 

for(let i=0; i<nStr.length; i++){ 
  num.push(parseInt(nStr[i]));
}
const v = parseInt(input[2]); 

let count = 0;

for(let i=0; i<num.length; i++){ 
  if(num[i]===v){ 
    count++; 
  }
}
console.log(count);