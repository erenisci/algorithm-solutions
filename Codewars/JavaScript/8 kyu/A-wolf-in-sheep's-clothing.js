function warnTheSheep(queue) {
  const position = queue.reverse().indexOf('wolf');
  return position === 0
    ? 'Pls go away and stop eating my sheep'
    : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}
