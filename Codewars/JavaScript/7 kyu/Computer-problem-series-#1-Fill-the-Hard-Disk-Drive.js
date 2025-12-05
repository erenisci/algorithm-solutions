function save(sizes, hd) {
  let used = 0;
  let count = 0;

  for (let size of sizes) {
    if (size === 0) {
      count++;
      continue;
    }

    if (used + size <= hd) {
      used += size;
      count++;
    } else {
      break;
    }
  }

  return count;
}
