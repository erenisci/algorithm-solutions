function alphabetWar(fight) {
  const ht = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
    m: -4,
    q: -3,
    d: -2,
    z: -1,
  };
  const total = fight.split('').reduce((acc, cur) => acc + (ht[cur] || 0), 0);
  return total < 0 ? 'Right side wins!' : 0 < total ? 'Left side wins!' : "Let's fight again!";
}
