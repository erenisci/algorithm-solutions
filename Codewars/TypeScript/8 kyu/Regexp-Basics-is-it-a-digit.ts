interface String {
  digit(): boolean;
}

String.prototype.digit = function (): boolean {
  return /^\d$/.test(this.toString());
};
