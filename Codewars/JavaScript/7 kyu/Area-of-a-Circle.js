function circleArea(radius) {
  if (radius <= 0) throw new Error();
  return Math.PI * radius ** 2;
}
