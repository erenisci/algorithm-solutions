function averages(numbers) {
  if (!numbers) return [];

  const avgArr = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    avgArr.push((numbers[i] + numbers[i + 1]) / 2);
  }
  return avgArr;
}
