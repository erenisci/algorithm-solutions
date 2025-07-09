function getFirstPython(list) {
  const dev = list.find(person => person.language === 'Python');
  return dev ? `${dev.firstName}, ${dev.country}` : 'There will be no Python developers';
}
