function greet(name) {
  const nameArr = name.split('').join('');
  return `Hello ${nameArr[0].toUpperCase() + nameArr.slice(1).toLowerCase()}!`;
}
