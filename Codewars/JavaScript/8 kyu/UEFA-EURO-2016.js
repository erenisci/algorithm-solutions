function uefaEuro2016(teams, scores) {
  return `At match ${teams[0]} - ${teams[1]}, ${
    scores[0] === scores[1]
      ? 'teams played draw.'
      : teams[scores.indexOf(Math.max(...scores))] + ' won!'
  }`;
}
