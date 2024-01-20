function openOrSenior(data) {
  let output = [];
  for (const element of data) {
    if (element[0] > 54 && element[1] > 7) output.push('Senior');
    else output.push('Open');
  }
  return output;
}
