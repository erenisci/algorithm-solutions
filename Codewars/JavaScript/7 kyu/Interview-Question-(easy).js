function getStrings(city) {
  const chars = city
    .toLowerCase()
    .replace(/[^a-z]/g, '')
    .split('');

  const counts = {};
  const order = [];

  for (const ch of chars) {
    if (!counts[ch]) {
      counts[ch] = 1;
      order.push(ch);
    } else {
      counts[ch]++;
    }
  }

  return order.map(ch => `${ch}:${'*'.repeat(counts[ch])}`).join(',');
}
