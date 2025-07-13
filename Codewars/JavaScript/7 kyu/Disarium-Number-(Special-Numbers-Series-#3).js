function disariumNumber(n) {
  const digits = String(n);
  let disarium = 0;

  for (let i = 0; i < digits.length; i++) disarium += (+digits[i]) ** (i + 1);

  return disarium === n ? 'Disarium !!' : 'Not !!';
}
