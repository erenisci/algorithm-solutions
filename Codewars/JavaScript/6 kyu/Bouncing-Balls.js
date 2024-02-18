function bouncingBall(h, bounce, window) {
  let count = -1;
  if (bounce > 0 && bounce < 1)
    while (h > window) {
      count += 2;
      h *= bounce;
    }
  return count;
}
