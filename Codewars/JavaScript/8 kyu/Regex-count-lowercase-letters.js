function lowercaseCount(str) {
  return (str.match(/[a-z]/g) || []).length;
}
