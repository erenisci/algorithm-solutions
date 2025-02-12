function cubeOdd(arr) {
  return arr.some(num => isNaN(num))
    ? undefined
    : arr.reduce((acc, cur) => acc + (cur % 2 !== 0 ? cur ** 3 : 0), 0);
}
