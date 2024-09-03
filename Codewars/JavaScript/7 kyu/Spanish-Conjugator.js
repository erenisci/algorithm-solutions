function conjugate(verb) {
  const conjugations = [];
  const verbType = verb.slice(-2);
  const stem = verb.slice(0, -2);

  if (verbType === 'ar') {
    conjugations.push(stem + 'o');
    conjugations.push(stem + 'as');
    conjugations.push(stem + 'a');
    conjugations.push(stem + 'amos');
    conjugations.push(stem + 'áis');
    conjugations.push(stem + 'an');
  } else if (verbType === 'er') {
    conjugations.push(stem + 'o');
    conjugations.push(stem + 'es');
    conjugations.push(stem + 'e');
    conjugations.push(stem + 'emos');
    conjugations.push(stem + 'éis');
    conjugations.push(stem + 'en');
  } else if (verbType === 'ir') {
    conjugations.push(stem + 'o');
    conjugations.push(stem + 'es');
    conjugations.push(stem + 'e');
    conjugations.push(stem + 'imos');
    conjugations.push(stem + 'ís');
    conjugations.push(stem + 'en');
  }

  return {
    [verb]: conjugations,
  };
}
