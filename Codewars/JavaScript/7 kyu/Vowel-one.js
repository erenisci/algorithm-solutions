function vowelOne(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let str = '';

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) str += '1';
    else str += '0';
  }

  return str;
}
