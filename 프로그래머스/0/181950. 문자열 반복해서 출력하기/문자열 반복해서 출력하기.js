const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  str = input[0];
  n = Number(input[1]); //타입 변환

  let result = ''; //빈 문자열로 새로운 변수 선언
  for(let i=0; i<n; i++){ //0, 1, 2, 3, 4, 
    result += str; // 'string', stringstring, stringstringstring
  }
  console.log(result);
});