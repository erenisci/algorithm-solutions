const flip = (d, a) => {
  return a.sort((a, b) => (d === 'R' ? a - b : b - a));
};
