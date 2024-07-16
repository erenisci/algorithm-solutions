function encrypt(text, n) {
  if (!text || n <= 0) return text;

  while (n) {
    let ans = '';
    for (let i = 1; i < text.length; i += 2) ans += text[i];
    for (let i = 0; i < text.length; i += 2) ans += text[i];

    text = ans;
    n--;
  }

  return text;
}

function decrypt(text, n) {
  if (!text || n <= 0) return text;

  const ans = new Array(text.length);
  while (n) {
    let index = 0;
    for (let i = 1; i < ans.length; i += 2) ans[i] = text[index++];
    for (let i = 0; i < ans.length; i += 2) ans[i] = text[index++];

    text = ans.join('');
    n--;
  }

  return text;
}
