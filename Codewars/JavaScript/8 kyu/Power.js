function numberToPower(number, power) {
  if (!power) return 1;
  return number * numberToPower(number, power - 1);
}
