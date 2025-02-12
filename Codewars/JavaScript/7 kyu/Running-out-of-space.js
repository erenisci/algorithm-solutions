function spacey(array) {
  const result = [];
  let currentString = '';

  array.forEach(word => {
    currentString += word;
    result.push(currentString);
  });

  return result;
}
