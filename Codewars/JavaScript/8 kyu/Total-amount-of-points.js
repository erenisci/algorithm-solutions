function points(games) {
  let total = 0;
  for (const points of games) {
    const splittedPoints = points.split(':');
    if (+splittedPoints[0] > +splittedPoints[1]) total += 3;
    else if (+splittedPoints[0] === +splittedPoints[1]) total += 1;
  }
  return total;
}
