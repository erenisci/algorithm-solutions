function isVow(a) {
  return a.map(num => {
    if (95 <= num && num <= 122) {
      const chr = String.fromCharCode(num);
      if (chr.match(/[aeiou]/)) return chr;
    }
    return num;
  });
}
