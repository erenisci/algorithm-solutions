function howMuchWater(water, load, clothes) {
  if (clothes < load) return 'Not enough clothes';
  if (clothes > 2 * load) return 'Too much clothes';
  return +(water * 1.1 ** (clothes - load)).toFixed(2);
}
