function gooseFilter(birds) {
  const geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];
  return birds.filter(str => !geese.includes(str));
}
