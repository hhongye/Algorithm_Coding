function solution(l, r) {
  var answer = [];
  for(let i=l; i<=r; i++){
    const numStr = i.toString();
    let isOnly = true;
    for(let k=0; k<numStr.length; k++){
      if(numStr[k] !== '0' && numStr[k] !== '5'){
        isOnly = false;
        break;
      }
    }
    if(isOnly){
      answer.push(i);
    }
    
  }
  return answer.length > 0 ? answer : [-1];
}