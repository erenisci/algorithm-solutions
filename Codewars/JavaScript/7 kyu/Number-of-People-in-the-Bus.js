var number = function (busStops) {
  let res = 0;
  for (let k = 0; k < busStops.length; k++) {
    res += busStops[k][0];
    res -= busStops[k][1];
  }
  return res;
};
