function solution(my_string, s, e) {
  var answer = '';
  const first = my_string.slice(0, s);
  const second = my_string.slice(s, e + 1).split('').reverse().join('');
  const third = my_string.slice(e + 1);
  answer = first + second + third;
  return answer;
}