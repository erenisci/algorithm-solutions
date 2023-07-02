function findNeedle(haystack) {
  if (haystack.includes('needle')) return 'found the needle at position ' + haystack.indexOf('needle');
  else return "Your function didn't return anything";
}
