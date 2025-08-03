function removeConsecutiveDuplicates(string) {
  const words = string.split(' ');
  const result = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i] !== words[i - 1]) {
      result.push(words[i]);
    }
  }

  return result.join(' ');
}
