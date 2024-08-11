function tripleTrouble(one, two, three) {
  let str = '';
  for (let i = 0; i < one.length; i++) {
    str += one[i] + two[i] + three[i];
  }
  return str;
}
