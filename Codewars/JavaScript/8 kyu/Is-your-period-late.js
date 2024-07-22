function periodIsLate(last, today, cycleLength) {
  return (today - last) / (1000 * 60 * 60 * 24) > cycleLength;
}
