function solution(digits) {
  let biggest = 0;
  for (let i = 0; i < digits.length - 4; i++) {
    let consecutive = +digits.slice(i, i + 5);
    if (biggest < consecutive) biggest = consecutive;
  }
  return biggest;
}
