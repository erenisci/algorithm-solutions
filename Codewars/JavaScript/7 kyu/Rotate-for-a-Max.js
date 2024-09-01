function maxRot(n) {
  let numStr = String(n);
  let max = n;

  for (let i = 0; i < numStr.length; i++) {
    numStr = numStr.slice(0, i) + numStr.slice(i + 1) + numStr[i];
    const rotatedNumber = +numStr;
    if (rotatedNumber > max) max = rotatedNumber;
  }

  return max;
}
