function well(x) {
  let str = 'Fail!',
    sum = 0;
  for (const el of x) {
    if (el.startsWith('g')) {
      sum++;
    }
    if (0 < sum && sum < 2) str = 'Publish!';
    else if (2 < sum) str = 'I smell a series!';
  }
  return str;
}
