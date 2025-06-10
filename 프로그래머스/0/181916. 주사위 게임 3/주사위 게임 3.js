function solution(a1, b1, c1, d1) {
  var answer = 0;

  const dice = [a1, b1, c1, d1].sort((x, y) => x - y); 
  const [a, b, c, d] = dice;

  if(a === d){
    answer = 1111 * a;
  }else if(a === c || b === d){ 
    const p = b;
    const q = a === c ? d : a;
    answer = (10 * p + q) ** 2;
  }else if(a === b && c === d){ 
    answer = (a + c) * Math.abs(a - c);
  }else if(a === b || b === c || c === d){ 
    if(a === b){
      answer = c * d;
    }else if(b === c){
      answer = a * d;
    }else{
      answer = a * b;
    }
  }else{
    answer = a;
  }

  return answer;
}