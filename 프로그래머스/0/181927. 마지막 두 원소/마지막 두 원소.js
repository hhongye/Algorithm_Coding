function solution(num_list) {
  var answer = [ ... num_list ]; 

  const last = num_list[num_list.length-1]; // 6
  const beforeLast = num_list[num_list.length-2]; // 1

  if(last > beforeLast){
    answer.push(last - beforeLast);
  } else {
    answer.push(last * 2);
  }

  return answer;
}