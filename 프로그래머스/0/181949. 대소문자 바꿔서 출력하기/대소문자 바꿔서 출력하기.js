const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let result = ''; //빈 문자열 만들기
    for(let i=0; i<str.length; i++){ //i=0,1,2,3,4,5,6
      if(str[i].toUpperCase() === str[i]){ //대문자로 바꾼 이후의 글자와 전의 글자가 같으면(원래 대문자이면)
        result = result + str[i].toLowerCase(); //기존값에 계속 누적하기- Ab
      } else{ //소문자면 대문자로 바꾸기
        result += str[i].toUpperCase(); //A
       }
    }
    console.log(result);
});