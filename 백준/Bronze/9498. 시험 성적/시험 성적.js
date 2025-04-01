const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
//console.log(inputData);

const x = parseInt(inputData[0]);
const y = parseInt(inputData[1]);

if (x >= 90 && x <= 100){
  console.log('A');
} else {
  if (x >= 80 && x < 90) {
    console.log('B');
  } else {
    if (x >= 70 && x < 80) {
      console.log('C');
    } else {
      if (x >= 60 && x < 70) {
        console.log('D')
      } else {
        if (x < 60){
          console.log('F');
        }
      }
    }
  } 
}