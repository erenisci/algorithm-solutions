function tailSwap(arr) {
  const [left1, right1] = arr[0].split(':');
  const [left2, right2] = arr[1].split(':');

  return [`${left1}:${right2}`, `${left2}:${right1}`];
}
