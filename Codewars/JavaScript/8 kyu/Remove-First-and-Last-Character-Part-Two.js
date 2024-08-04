function array(string) {
  return string.split(',').slice(1, -1).join(' ') || null;
}
