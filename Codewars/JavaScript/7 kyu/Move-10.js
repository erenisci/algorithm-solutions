function moveTen(s) {
  let result = '';

  for (const ch of s) {
    if (/[a-zA-Z]/.test(ch)) {
      const isUpper = ch === ch.toUpperCase();
      const base = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);

      const shifted = (ch.charCodeAt(0) - base + 10) % 26;
      result += String.fromCharCode(base + shifted);
    } else {
      result += ch;
    }
  }

  return result;
}
