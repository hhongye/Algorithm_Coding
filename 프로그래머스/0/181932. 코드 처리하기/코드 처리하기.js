function solution(code) {
  var answer = '';
  let mode = 0;
  for(let i=0; i<code.length; i++){
    if(code[i] === '1'){
      mode = mode === 0 ? 1 : 0;
    } else if(mode === 0 && i % 2 === 0 || mode === 1 && i % 2 === 1){ //모드가 0 이고 idx가 짝수일때 또는 모드가 1 이고 idx가 홀수일때
      answer += code[i];
    }
  }
  if(!answer) answer = 'EMPTY';
  
  return answer;
}