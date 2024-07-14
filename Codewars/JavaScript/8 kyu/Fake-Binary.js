function fakeBin(x) {
  let myStr = '';
  for (let i = 0; i < x.length; i++) {
    if (Number(x[i]) < 5) myStr += '0';
    else myStr += '1';
  }
  return myStr;
}
