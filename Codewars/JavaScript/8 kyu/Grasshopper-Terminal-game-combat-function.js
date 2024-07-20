function combat(health, damage) {
  const res = health - damage;
  return res > 0 ? res : 0;
}
