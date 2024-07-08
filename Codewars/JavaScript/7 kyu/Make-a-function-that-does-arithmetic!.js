function arithmetic(a, b, operator) {
  const operations = {
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b,
  };
  return operations[operator];
}
