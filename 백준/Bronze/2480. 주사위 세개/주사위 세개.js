function main() {
  const data = getData();
  const n1 = data[0][0]; 
  const n2 = data[0][1]; 
  const n3 = data[0][2]; 

  let point = 0;

  if( n1 === n2 && n2 === n3 ){
    point = 10000 + n1 * 1000;
  } else if(n1 === n2 || n2 === n3 ) {
    point = 1000 + n2 * 100;
  } else if ( n1 === n3){
    point = 1000 + n1 * 100;
  } else {
    point = Math.max(n1, n2, n3) * 100;
  }

  console.log(point);
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