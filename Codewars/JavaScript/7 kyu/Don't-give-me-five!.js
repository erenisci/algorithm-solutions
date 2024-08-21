function dontGiveMeFive(start, end) {
  let count = 0;
  for (let num = start; num <= end; num++) {
    if (!num.toString().includes('5')) {
      count++;
    }
  }
  return count;
}
