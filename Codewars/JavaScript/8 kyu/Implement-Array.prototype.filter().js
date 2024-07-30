Array.prototype.filter = function (func) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (func(this[i], i, this)) {
        result.push(this[i]);
      }
    }
  }
  return result;
};
