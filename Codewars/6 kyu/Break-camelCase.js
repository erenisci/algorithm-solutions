function solution(string) {
  let str = '';
  for (let i = 0; i < string.length; i++) {
    if (/[A-Z]/.test(string[i])) {
      str += ' ' + string[i];
    } else str += string[i];
  }
  return str;
}
