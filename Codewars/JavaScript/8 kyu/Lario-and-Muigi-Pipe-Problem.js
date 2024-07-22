function pipeFix(numbers) {
  let array = [];
  for (let i = Math.min(...numbers); i <= Math.max(...numbers); i++) {
    array.push(i);
  }
  return array;
}
