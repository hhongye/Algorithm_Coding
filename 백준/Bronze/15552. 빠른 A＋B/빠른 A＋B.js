let input = require("fs").readFileSync(0).toString().split("\n");

let T = Number(input[0]);
let sum = "";

for (let i = 1; i <= T; i++) {
  let num = input[i].split(" ");
  sum += Number(num[0]) + Number(num[1]) + "\n";
}

console.log(sum);