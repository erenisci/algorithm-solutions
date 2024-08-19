function chineseZodiac(year) {
  const elements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'];
  const animals = [
    'Rat',
    'Ox',
    'Tiger',
    'Rabbit',
    'Dragon',
    'Snake',
    'Horse',
    'Goat',
    'Monkey',
    'Rooster',
    'Dog',
    'Pig',
  ];

  const elementIndex = Math.floor(((year - 4) % 10) / 2);
  const animalIndex = (year - 4) % 12;

  return `${elements[elementIndex]} ${animals[animalIndex]}`;
}
