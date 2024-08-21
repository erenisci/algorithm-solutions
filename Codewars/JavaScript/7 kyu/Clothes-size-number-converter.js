function sizeToNumber(size) {
  if (
    size.length === 0 ||
    (!size.startsWith('x') && size.length > 1) ||
    (size[size.length - 1] === 'm' && size.length > 1)
  )
    return null;

  const sizeObj = {};
  size.split('').map(char => {
    if (!sizeObj[char]) sizeObj[char] = 1;
    else sizeObj[char]++;
  });

  const keys = Object.keys(sizeObj);
  if (keys.length > 2 || (keys.length === 1 && keys[0] === 'x')) return null;

  const sizes = { s: 36, m: 38, l: 40, x: 2 };
  let totalSize = 0;
  for (const [key, val] of Object.entries(sizeObj)) {
    if (key === 's') totalSize = sizes[key] - totalSize;
    else totalSize += sizeObj[key] * sizes[key];
  }

  return totalSize;
}
