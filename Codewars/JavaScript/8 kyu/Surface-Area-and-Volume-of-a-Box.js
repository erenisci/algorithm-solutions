function getSize(width, height, depth) {
  return [2 * width * height + 2 * width * depth + 2 * height * depth, width * height * depth];
}
