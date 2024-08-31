function mygcd(x, y) {
  while (y) {
    let temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}
