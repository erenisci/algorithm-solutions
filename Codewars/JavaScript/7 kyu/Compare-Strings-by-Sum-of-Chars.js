function compare(s1, s2) {
  const normalize = str => {
    if (!str) return 0;

    const upper = str.toUpperCase();

    if (!/^[A-Z]+$/.test(upper)) return 0;

    return upper.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  };

  return normalize(s1) === normalize(s2);
}
