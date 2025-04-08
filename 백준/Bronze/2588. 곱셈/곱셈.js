function main() {
  const data = getData();
  const n1 = data.a; // 472
  const n2 = data.b; // 385

  const n3 = n1 * (n2 % 10); 
  const n4 = n1 * (parseInt(n2/10) % 10);
  const n5 = n1 * parseInt(n2/100); 
  const n6 = n3 + n4*10 + n5*100; 

  console.log(n3);
  console.log(n4);
  console.log(n5);
  console.log(n6);
}
main();

function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString().trim().split("\n");

  const result = new Object();

  result.a = isNaN(fileData[0]) ? fileData[0] : parseInt(fileData[0]);
  result.b = isNaN(fileData[1]) ? fileData[1] : parseInt(fileData[1]);
  return result;
}