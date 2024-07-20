function betterThanAverage(classPoints, yourPoints) {
  let res = yourPoints;
  for (let i = 0; i < classPoints.length; i++) {
    res += classPoints[i];
  }
  if (yourPoints >= res / (classPoints.length + 1)) return true;
  return false;
}
