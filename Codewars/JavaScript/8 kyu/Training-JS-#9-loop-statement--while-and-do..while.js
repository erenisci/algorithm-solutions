function padIt(str, n) {
  let result = str;
  while (n > 0) {
    if (n % 2 === 0) result = result + '*';
    else result = '*' + result;
    n--;
  }
  return result;
}
