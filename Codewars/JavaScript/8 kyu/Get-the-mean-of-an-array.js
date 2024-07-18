function getAverage(marks) {
  return Math.floor(marks.reduce((acc, val) => acc + val, 0) / marks.length);
}
