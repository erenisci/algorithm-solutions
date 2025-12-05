function dotCalculator(equation) {
  const [left, op, right] = equation.split(' ');

  const a = left.length;
  const b = right.length;

  let result;

  switch (op) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '//':
      result = Math.floor(a / b);
      break;
    default:
      throw new Error('Invalid operator');
  }

  return '.'.repeat(result);
}
