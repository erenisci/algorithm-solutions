function calculate(a, operator, b) {
  if (!['+', '-', '*', '/'].includes(operator)) return null;

  if (operator === '/' && b === 0) return null;

  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return null;
  }
}
