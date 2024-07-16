function toFreud(string) {
  return (
    string &&
    string
      .split(' ')
      .map(str => 'sex')
      .join(' ')
  );
}
