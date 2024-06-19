String.prototype.toAlternatingCase = function () {
  return this.split('')
    .map(str => (str.match(/[a-z]/) ? str.toUpperCase() : str.toLowerCase()))
    .join('');
};
