function solution(num_list) {
  var answer = 0;

  let sum = 0;
  let mul = 1;

  // [3, 4, 5, 2, 1]
  for(let i=0; i<num_list.length; i++){
    sum += num_list[i]; // 0 + 3 + 4 + 5 + 2 + 1
    mul *= num_list[i]; // 1 * 3 * 4 * 5 * 2 * 1
  }
  answer = mul < sum**2 ? 1 : 0;

  return answer;
}