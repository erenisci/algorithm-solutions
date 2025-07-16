function searchNames(logins) {
  return logins.filter(pair => pair[0].endsWith('_'));
}
