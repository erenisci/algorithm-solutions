function correct(string) {
  const corrections = {
    0: 'O',
    1: 'I',
    5: 'S',
  };
  return string.replace(/[015]/g, match => corrections[match]);
}
