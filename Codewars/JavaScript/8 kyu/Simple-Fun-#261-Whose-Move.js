function whoseMove(lastPlayer, win) {
  return win ? lastPlayer : lastPlayer === 'white' ? 'black' : 'white';
}
