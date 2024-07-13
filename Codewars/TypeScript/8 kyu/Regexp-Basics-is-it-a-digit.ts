interface String {
  digit(): boolean;
}

String.prototype.digit = (): boolean => {
  return /^\d$/.test(this.toString());
};
