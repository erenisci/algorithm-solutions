function aspectRatio(x, y, constant) {
  const aspectR = 16 / 9;

  let temp;
  if (constant === 'height') return [Math.ceil(y * aspectR), y];
  if (constant === 'width') return [x, Math.ceil(x / aspectR)];
  if (constant === 'diagonal') temp = Math.sqrt((x * x + y * y) / 337);
  if (constant === 'area') temp = Math.sqrt((x * y) / 144);

  return [Math.ceil(16 * temp), Math.ceil(9 * temp)];
}
