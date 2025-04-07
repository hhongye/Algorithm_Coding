const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");
//console.log(fileData);

const n = parseInt(fileData[0]); 

for(let i=1; i<=9; i++){
  console.log(`${n}`+' * ' + `${i}`+' = '+`${n}`*`${i}`);
}