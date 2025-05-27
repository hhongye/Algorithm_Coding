function solution(a, b) {
    var answer = 0;
    const r1 = parseInt(a + '' + b);
    const r2 = 2 * a * b;
  
    answer = r1 > r2 ? r1 : r2;

    return answer;
}