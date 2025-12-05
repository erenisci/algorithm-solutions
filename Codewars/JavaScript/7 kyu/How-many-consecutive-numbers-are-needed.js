function consecutive(array) {
  if (array.length <= 1) return 0;

  const min = Math.min(...array);
  const max = Math.max(...array);

  const fullRangeCount = max - min + 1;

  const existingCount = array.length;

  return fullRangeCount - existingCount;
}
