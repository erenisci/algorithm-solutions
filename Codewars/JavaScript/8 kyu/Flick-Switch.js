function flickSwitch(arr) {
  let variable = true;
  return arr.map(el => (el === 'flick' ? (variable = !variable) : variable));
}
