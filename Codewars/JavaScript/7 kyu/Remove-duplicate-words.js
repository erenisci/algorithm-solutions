function removeDuplicateWords(s) {
  const result = [];
  s.split(' ').map(word => {
    if (!result.includes(word)) result.push(word);
  });
  return result.join(' ');
}
