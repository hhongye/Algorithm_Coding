function main() {
  const data = getData();

  let h = data.a;
  let m = data.b;

  // 전체 분으로 환산
  let totalMin = h * 60 + m - 45;

  // 음수면 하루 더하기
  if (totalMin < 0) totalMin += 60 * 24;

  // 시:분으로 변환
  h = Math.floor(totalMin / 60);
  m = totalMin % 60;

  console.log(h + " " + m);
}
main();

function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString().trim().split(" ");

  const result = new Object();

  //숫자면 숫자로, 숫자가 아니면 문자로 반환
  result.a = isNaN(fileData[0]) ? fileData[0] : parseInt(fileData[0]);
  result.b = isNaN(fileData[1]) ? fileData[1] : parseInt(fileData[1]); 

  return result;
}