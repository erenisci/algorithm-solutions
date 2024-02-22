String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map(newx => newx[0][0].toUpperCase() + newx.slice(1))
    .join(' ');
};
