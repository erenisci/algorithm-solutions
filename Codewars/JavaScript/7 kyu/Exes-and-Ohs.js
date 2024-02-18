function XO(str) {
  let arr = str.toLowerCase().split('');
  return (
    arr.filter(element => element == 'x').length ===
    arr.filter(element => element == 'o').length
  );
}
