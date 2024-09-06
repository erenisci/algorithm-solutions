function countAnimals(animals, count) {
  const ht = {};

  count.forEach(animal => {
    ht[animal] = 0;
  });

  animals.split(',').forEach(animalC => {
    if (ht.hasOwnProperty(animalC)) ht[animalC]++;
  });

  const result = count.map(animal => ht[animal] || 0);

  return result;
}
