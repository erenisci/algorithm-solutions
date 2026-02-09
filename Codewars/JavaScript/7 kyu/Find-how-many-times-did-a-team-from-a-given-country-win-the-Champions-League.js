function countWins(winnerList, country) {
  let count = 0;

  for (const winner of winnerList) {
    if (winner.country === country) {
      count++;
    }
  }

  return count;
}
