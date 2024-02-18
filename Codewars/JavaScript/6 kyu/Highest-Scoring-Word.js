function high(x) {
  let arrSplit = x.split(' ');
  let arrAscii = arrSplit.map(el => {
    return el.split('').reduce((acc, ch) => acc + ch.charCodeAt(0) - 96, 0);
  });
  const maxIndex = arrAscii.indexOf(Math.max(...arrAscii));
  return arrSplit[maxIndex];
}
