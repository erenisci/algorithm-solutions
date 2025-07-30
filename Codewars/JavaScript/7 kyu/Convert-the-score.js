function scoreboard(string) {
  const scores = ['nil', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  return string
    .split(' ')
    .filter(word => scores.includes(word))
    .map(word => scores.indexOf(word));
}
