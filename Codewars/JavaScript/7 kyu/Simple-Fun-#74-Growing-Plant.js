function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let height = 0,
    count = 0;
  while (height < desiredHeight) {
    count++;
    height += upSpeed;
    if (height >= desiredHeight) break;
    height -= downSpeed;
  }
  return count;
}
