function whatday(num) {
  const wd = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return wd[num - 1] || 'Wrong, please enter a number between 1 and 7';
}
