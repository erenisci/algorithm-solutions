function countSheeps(arrayOfSheep) {
  let res = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i]) res++;
  }
  return res;
}
