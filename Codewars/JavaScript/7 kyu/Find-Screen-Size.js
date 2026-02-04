function findScreenHeight(width, ratio) {
  const [ratioWidth, ratioHeight] = ratio.split(':').map(Number);
  const height = Math.floor((width * ratioHeight) / ratioWidth);
  return `${width}x${height}`;
}
