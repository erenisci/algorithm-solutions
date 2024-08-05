const rps = (p1, p2) => {
  const wins = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock',
  };

  if (p1 === p2) return 'Draw!';
  if (wins[p1] === p2) return 'Player 1 won!';
  return 'Player 2 won!';
};
