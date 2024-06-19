// Even Fibonacci Numbers
// https://projecteuler.net/problem=2

let total = 0,
  pre = 1,
  next = 2,
  temp;

while (next < 4_000_000) {
  if (next % 2 === 0) total += next;
  temp = next;
  next = pre + next;
  pre = temp;
}

console.log('Answer:', total);
