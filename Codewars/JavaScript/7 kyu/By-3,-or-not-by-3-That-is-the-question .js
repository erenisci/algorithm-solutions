function divisibleByThree(str) {
  return str.split('').reduce((acc, cur) => acc + +cur, 0) % 3 === 0;
}
