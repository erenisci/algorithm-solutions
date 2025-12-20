function nextHappyYear(a) {
  while (new Set([...(++a + '')]).size < 4);
  return a;
}
