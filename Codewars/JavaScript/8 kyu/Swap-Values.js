function swapValues() {
  const args = Array.prototype.slice.call(arguments)[0];
  const temp = args[0];
  args[0] = args[1];
  args[1] = temp;
}
