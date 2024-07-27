function converter(mpg) {
  const kpl = (mpg * 1.609344) / 4.54609188;
  return +kpl.toFixed(2);
}
