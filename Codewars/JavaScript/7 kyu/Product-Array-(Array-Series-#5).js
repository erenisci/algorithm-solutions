function productArray(numbers) {
  const totalProd = numbers.reduce((a, b) => a * b, 1);
  return numbers.map(num => totalProd / num);
}
