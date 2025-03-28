const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");

const y = parseInt(fileData[0]);

console.log(y-'543');