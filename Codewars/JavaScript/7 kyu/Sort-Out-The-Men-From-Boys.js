function menFromBoys(arr) {
  const setArr = [...new Set(arr)];
  const even = setArr.filter(num => num % 2 === 0).sort((a, b) => a - b);
  const odd = setArr.filter(num => num % 2 !== 0).sort((a, b) => b - a);
  return even.concat(odd);
}
