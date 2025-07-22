function evenLast(numbers) {
  if (numbers.length === 0) return 0;
  return (
    numbers.reduce((acc, cur, index) => (index % 2 === 0 ? acc + cur : acc), 0) *
    numbers[numbers.length - 1]
  );
}
