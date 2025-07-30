function encode(s) {
  let res = '';
  let left = 0,
    right = s.length - 1;
  while (left <= right) {
    res += s[left++];
    if (left <= right) res += s[right--];
  }
  return res;
}

function decode(s) {
  const res = Array(s.length);
  let left = 0,
    right = s.length - 1;
  for (let i = 0; i < s.length; i += 2) {
    res[left++] = s[i];
    if (i + 1 < s.length) res[right--] = s[i + 1];
  }
  return res.join('');
}
