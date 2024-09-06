function shuffleIt(arr, ...shuffs) {
  for ([o, t] of shuffs) [arr[o], arr[t]] = [arr[t], arr[o]];
  return arr;
}
