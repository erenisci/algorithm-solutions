function sumOfN(n) {
  const array = [];
  let j = 0;
  for (let i = 0; i < Math.abs(n) + 1; i++) {
    if (n < 0) {
      array.push(-j);
    } else {
      array.push(j);
    }
    j += i + 1;
  }
  return array;
}
