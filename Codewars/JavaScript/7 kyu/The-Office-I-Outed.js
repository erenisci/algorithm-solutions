function outed(meet, boss) {
  let names = Object.keys(meet);
  let score = names.reduce((acc, cum) => acc + meet[cum], 0) + meet[boss];
  return score / names.length > 5 ? 'Nice Work Champ!' : 'Get Out Now!';
}
