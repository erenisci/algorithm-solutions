function containAllRots(strng, arr) {
  if (strng === '') return true;

  const rotations = [];
  const len = strng.length;

  for (let i = 0; i < len; i++) {
    const rotation = strng.slice(i) + strng.slice(0, i);
    rotations.push(rotation);
  }

  return rotations.every(rot => arr.includes(rot));
}
