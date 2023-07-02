function addAll(numbers) {
  let result = 0,
    temp = 0;
  while (numbers.length > 1) {
    numbers = numbers.sort((a, b) => b - a);
    temp = numbers.pop() + numbers.pop();
    numbers.push(temp);
    result += temp;
  }
  return result;
}
