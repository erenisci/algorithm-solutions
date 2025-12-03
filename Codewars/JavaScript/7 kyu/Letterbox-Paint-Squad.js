function paintLetterboxes(start, end) {
  const counts = Array(10).fill(0);

  for (let n = start; n <= end; n++) {
    for (const ch of n.toString()) counts[ch]++;
  }

  return counts;
}
