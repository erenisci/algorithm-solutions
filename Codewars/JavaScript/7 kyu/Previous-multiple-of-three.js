function prevMultOfThree(n) {
  let str = String(n);

  while (str.length > 0) {
    const num = Number(str);

    if (num % 3 === 0) return num;

    str = str.slice(0, -1);
  }

  return null;
}
