function gps(s, x) {
  if (x.length <= 1) return 0;

  let maxSpeed = 0;
  for (let i = 1; i < x.length; i++) {
    const deltaDistance = x[i] - x[i - 1];
    const speed = (3600 * deltaDistance) / s;
    if (speed > maxSpeed) maxSpeed = speed;
  }

  return Math.floor(maxSpeed);
}
