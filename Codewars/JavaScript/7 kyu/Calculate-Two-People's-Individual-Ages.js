function getAges(sum, difference) {
  let average = 0;
  if (sum < 0 || difference < 0 || sum - difference < 0) return null;
  else average = (sum - difference) / 2;

  return [average + difference, average];
}
