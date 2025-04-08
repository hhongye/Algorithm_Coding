const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split("\n");

const now = fileData[0].split(" ") 
let h = parseInt(now[0]); 
let m = parseInt(now[1]); 

let cookingTime = parseInt(fileData[1]); //요리시간

m += cookingTime;
h += Math.floor(m/60);
m %= 60;
h %= 24;

console.log(h,m);