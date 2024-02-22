function filter_list(l) {
  // Return a new array with the strings filtered out
  let myLst = [];
  for (let i = 0; i < l.length; i++) {
    if (Number.isInteger(l[i])) myLst.push(l[i]);
  }
  return myLst;
}
