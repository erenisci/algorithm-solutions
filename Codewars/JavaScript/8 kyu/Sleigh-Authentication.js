function Sleigh() {
  this.name = 'Santa Claus';
  this.password = 'Ho Ho Ho!';
}

Sleigh.prototype.authenticate = function (name, password) {
  return this.name == name && this.password == password;
};
