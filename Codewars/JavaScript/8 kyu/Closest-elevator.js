function elevator(left, right, call) {
  const leftCall = Math.abs(call - left);
  const rightCall = Math.abs(call - right);
  return leftCall > rightCall ? 'right' : leftCall < rightCall ? 'left' : 'right';
}
