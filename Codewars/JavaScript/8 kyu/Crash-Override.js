function aliasGen(n, s) {
  const fs = n[0].toUpperCase();
  const sn = s[0].toUpperCase();
  return firstName[fs] && surname[sn]
    ? `${firstName[fs]} ${surname[sn]}`
    : 'Your name must start with a letter from A - Z.';
}
