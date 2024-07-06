function evaporator(content, evap_per_day, threshold) {
  const thContent = content * (threshold / 100);
  let curContent = content;
  let days = 0;

  while (curContent >= thContent) {
    curContent -= curContent * (evap_per_day / 100);
    days += 1;
  }

  return days;
}

console.log(evaporator(10, 10, 10));
