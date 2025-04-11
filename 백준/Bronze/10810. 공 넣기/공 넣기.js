function main() {
  const data = getData();

  const n  = data[0][0]; 
  const result = new Array(n).fill(0); 
  for(let i=1; i<data.length; i++){ 
    const rowArr = data[i]; 
    const x = rowArr[0];
    const y = rowArr[1];
    const z = rowArr[2];

    for(let k = x; k <= y; k++){ 
      result[k-1] = z; 
    }
  }
  console.log(result.join(' ')); 
}
main();

function getData() {
  const arr = require("fs").readFileSync(0).toString().trim().split("\n"); 
  const result = [];
  for (let row of arr) { 
    const rowArr = row.split(' '); 
    for (let k = 0; k < rowArr.length; k++) { 
      rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]); 
    }
    result.push(rowArr.length === 1 ? rowArr[0] : rowArr); 
  }
  return result.length===1 ? result[0] : result; 
}