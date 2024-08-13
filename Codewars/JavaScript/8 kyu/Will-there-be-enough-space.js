function enough(cap, on, wait) {
  return Math.max(wait + on - cap, 0);
}
