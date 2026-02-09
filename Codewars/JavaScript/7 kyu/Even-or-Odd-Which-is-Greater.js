function evenOrOdd(str) {
  let evenSum = 0;
  let oddSum = 0;

  for (const ch of str) {
    const digit = +ch;

    if (digit % 2 === 0) {
      evenSum += digit;
    } else {
      oddSum += digit;
    }
  }

  if (evenSum > oddSum) {
    return 'Even is greater than Odd';
  }

  if (oddSum > evenSum) {
    return 'Odd is greater than Even';
  }

  return 'Even and Odd are the same';
}
