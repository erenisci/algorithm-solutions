function accum(s) {
  let myStr = '';
  for (let i = 0; i < s.length; i++) {
    myStr += s[i].toUpperCase();
    for (let j = 0; j < i; j++) {
      myStr += s[i].toLowerCase();
    }
    if (i !== s.length - 1) myStr += '-';
  }
  return myStr;
}
