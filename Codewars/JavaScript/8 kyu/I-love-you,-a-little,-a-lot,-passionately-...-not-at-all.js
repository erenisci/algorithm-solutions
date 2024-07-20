function howMuchILoveYou(nbPetals) {
  const arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
  return arr[(nbPetals - 1) % arr.length];
}
