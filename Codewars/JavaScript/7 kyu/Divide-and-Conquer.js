function divCon(x) {
  return x.reduce(
    (acc, cur) => acc + (typeof cur === 'number' ? cur : -cur),
    0
  );
}
