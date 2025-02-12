function sumOfIntegersInString(s) {
  const numbers = s.match(/\d+/g);

  if (!numbers) return 0;
  return s.match(/\d+/g).reduce((sum, num) => sum + Number(num), 0);
}
