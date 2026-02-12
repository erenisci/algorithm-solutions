function containAllRots(string, arr) {
  if (string === '') return true;

  const rotations = [];
  const len = string.length;

  for (let i = 0; i < len; i++) {
    const rotation = string.slice(i) + string.slice(0, i);
    rotations.push(rotation);
  }

  return rotations.every(rot => arr.includes(rot));
}
