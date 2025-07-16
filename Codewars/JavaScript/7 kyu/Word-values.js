function wordValue(a) {
  return a.map((letters, index) => {
    return (
      letters
        .toLowerCase()
        .split('')
        .reduce((acc, cur) => {
          const code = cur.charCodeAt(0);
          return code >= 97 && code <= 122 ? acc + (code - 96) : acc;
        }, 0) *
      (index + 1)
    );
  });
}
