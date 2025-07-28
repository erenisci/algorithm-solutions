function blowCandles(str) {
  const arr = str.split('').map(Number);
  let blows = 0;
  let i = 0;

  while (i < arr.length) {
    if (arr[i] === 0) {
      i++;
      continue;
    }

    for (let j = i; j < i + 3 && j < arr.length; j++) {
      if (arr[j] > 0) arr[j]--;
    }

    blows++;
  }

  return blows;
}
