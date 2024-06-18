function gimme(triplet) {
  return triplet.indexOf([...triplet].sort((a, b) => a - b)[1]);
}
