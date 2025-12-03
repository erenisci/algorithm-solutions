function makeBackronym(string) {
  return [...string].map(ch => dict[ch.toUpperCase()]).join(' ');
}
