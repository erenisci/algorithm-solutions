function remove(string) {
  return string
    .split(' ')
    .map(word => word.replace(/!+$/, ''))
    .join(' ');
}
