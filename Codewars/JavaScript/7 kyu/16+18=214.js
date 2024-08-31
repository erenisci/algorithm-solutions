function add(num1, num2) {
  const numStr1 = String(num1),
    numStr2 = String(num2);
  const maxLength = Math.max(numStr1.length, numStr2.length);

  const paddedNumStr1 = numStr1.padStart(maxLength, '0');
  const paddedNumStr2 = numStr2.padStart(maxLength, '0');

  let total = '';
  for (let i = 0; i < maxLength; i++) {
    const sum = +paddedNumStr1[i] + +paddedNumStr2[i];
    total += String(sum);
  }

  return +total;
}
