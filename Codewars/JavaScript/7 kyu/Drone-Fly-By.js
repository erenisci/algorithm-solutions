function flyBy(lamps, drone) {
  const n = drone.length;
  return lamps
    .split('')
    .map((ch, i) => (i < n ? 'o' : 'x'))
    .join('');
}
