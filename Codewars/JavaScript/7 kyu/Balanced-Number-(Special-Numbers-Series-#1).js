function balancedNum(number) {
  const numStr = String(number);
  const length = numStr.length;
  if (length <= 2) return 'Balanced';

  const mid = Math.floor(length / 2);
  const leftPart = numStr.slice(0, length % 2 === 0 ? mid - 1 : mid);
  const rightPart = numStr.slice(mid + 1);

  const sum = digits => digits.split('').reduce((acc, cur) => acc + +cur, 0);

  return sum(leftPart) === sum(rightPart) ? 'Balanced' : 'Not Balanced';
}
