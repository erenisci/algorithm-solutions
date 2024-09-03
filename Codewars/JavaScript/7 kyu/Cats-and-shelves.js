function solution(start, finish) {
  return Math.floor((finish - start) / 3) + ((finish - start) % 3);
}
