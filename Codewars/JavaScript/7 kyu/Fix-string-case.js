function solve(s) {
  return s.replace(/[A-Z]/g, '').length < s.length / 2 ? s.toUpperCase() : s.toLowerCase();
}
