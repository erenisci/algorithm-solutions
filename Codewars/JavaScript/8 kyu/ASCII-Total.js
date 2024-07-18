function uniTotal(string) {
  return string.split('').reduce((acc, cur) => acc + +cur.charCodeAt(0), 0);
}
