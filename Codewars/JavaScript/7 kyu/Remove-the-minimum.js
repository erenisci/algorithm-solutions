function removeSmallest(numbers) {
  let minIndex = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, minIndex), ...numbers.slice(minIndex + 1)];
}
