function main() {
  const data = getData();
  const bytes = data[0][0];
  const longTimes = bytes / 4;
  let result = ''; 
  for(let i=0; i<longTimes; i++){
    result += 'long ';
  }
  console.log(result+'int');
}
main();

function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString();
  const arr = fileData.trim().split("\n"); 
  const result = [];

  for (let row of arr) { 
    const rowArr = row.split(' '); 
    for (let k = 0; k < rowArr.length; k++) { 
      rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]); 
    }
    result.push(rowArr);
  }
  return result;
}