function sortMyString(S) {
  const splittedArr = S.split('');
  return (
    splittedArr.filter((_, i) => i % 2 === 0).join('') +
    ' ' +
    splittedArr.filter((_, i) => i % 2 !== 0).join('')
  );
}
