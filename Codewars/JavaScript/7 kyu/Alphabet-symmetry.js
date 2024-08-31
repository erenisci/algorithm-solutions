function solve(arr) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return arr.map(word => {
    return word.split('').reduce((count, letter, index) => {
      const lowerLetter = letter.toLowerCase();
      if (alphabet.indexOf(lowerLetter) === index) count++;
      return count;
    }, 0);
  });
}
