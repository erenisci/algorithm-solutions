function calculate(...args1) {
  return function (...args2) {
    return [...args1, ...args2].reduce((sum, n) => sum + n, 0);
  };
}
