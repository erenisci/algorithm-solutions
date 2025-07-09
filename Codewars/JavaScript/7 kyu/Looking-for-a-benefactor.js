function newAvg(arr, newavg) {
  const donation = Math.ceil((arr.length + 1) * newavg - arr.reduce((a, b) => a + b, 0));
  if (donation <= 0) throw new Error('Expected New Average is too low');
  return donation;
}
