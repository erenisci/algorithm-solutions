function solve(s) {
  let uppercaseCount = 0;
  let lowercaseCount = 0;
  let numberCount = 0;
  let specialCharCount = 0;

  for (let char of s) {
    if (/[A-Z]/.test(char)) uppercaseCount++;
    else if (/[a-z]/.test(char)) lowercaseCount++;
    else if (/[0-9]/.test(char)) numberCount++;
    else specialCharCount++;
  }

  return [uppercaseCount, lowercaseCount, numberCount, specialCharCount];
}
