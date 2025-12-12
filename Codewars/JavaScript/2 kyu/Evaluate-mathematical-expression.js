function calc(expression) {
  expression = expression.replace(/\s+/g, '');

  const outputQueue = [];
  const operatorStack = [];

  const operators = {
    '+': { precedence: 1, assoc: 'L', func: (a, b) => a + b },
    '-': { precedence: 1, assoc: 'L', func: (a, b) => a - b },
    '*': { precedence: 2, assoc: 'L', func: (a, b) => a * b },
    '/': { precedence: 2, assoc: 'L', func: (a, b) => a / b },
  };

  function isOperator(c) {
    return operators.hasOwnProperty(c);
  }

  function isUnaryMinus(expression, i) {
    if (expression[i] !== '-') return false;
    if (i === 0) return true;
    const prev = expression[i - 1];
    return isOperator(prev) || prev === '(';
  }

  for (let i = 0; i < expression.length; i++) {
    const c = expression[i];

    if (/\d|\./.test(c)) {
      let num = c;
      let dotCount = c === '.' ? 1 : 0;

      while (i + 1 < expression.length && /\d|\./.test(expression[i + 1])) {
        if (expression[i + 1] === '.') {
          dotCount++;
          if (dotCount > 1) return NaN;
        }
        num += expression[++i];
      }

      if (num === '.' || isNaN(+num)) return NaN;
      outputQueue.push(+num);
      continue;
    }

    if (isUnaryMinus(expression, i)) {
      outputQueue.push(0);
      operatorStack.push('-');
      continue;
    }

    if (isOperator(c)) {
      while (
        operatorStack.length &&
        isOperator(operatorStack[operatorStack.length - 1]) &&
        operators[c].assoc === 'L' &&
        operators[c].precedence <= operators[operatorStack[operatorStack.length - 1]].precedence
      ) {
        outputQueue.push(operatorStack.pop());
      }
      operatorStack.push(c);
      continue;
    }

    if (c === '(') {
      operatorStack.push(c);
      continue;
    }

    if (c === ')') {
      while (operatorStack.length && operatorStack[operatorStack.length - 1] !== '(') {
        outputQueue.push(operatorStack.pop());
      }
      operatorStack.pop();
      continue;
    }
  }

  while (operatorStack.length) {
    outputQueue.push(operatorStack.pop());
  }

  const stack = [];

  for (const token of outputQueue) {
    if (typeof token === 'number') {
      stack.push(token);
    } else if (isOperator(token)) {
      const b = stack.pop();
      const a = stack.pop();
      if (a === undefined || b === undefined) return NaN;
      stack.push(operators[token].func(a, b));
    }
  }

  return stack.length === 1 ? stack[0] : NaN;
}
