function isDivisible(...args) {
  const num = args[0];
  return args.slice(1).every(divisor => num % divisor === 0);
}
