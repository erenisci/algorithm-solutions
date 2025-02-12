function lastSurvivor(letters, coords) {
  coords.forEach(position => {
    letters = letters.slice(0, position) + letters.slice(position + 1);
  });

  return letters;
}
