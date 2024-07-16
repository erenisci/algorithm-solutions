function iceBrickVolume(radius, bottleLength, rimLength) {
  const h = bottleLength - rimLength;
  return 2 * radius ** 2 * h;
}
