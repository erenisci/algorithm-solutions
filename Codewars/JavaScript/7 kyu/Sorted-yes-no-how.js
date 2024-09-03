function isSortedAndHow(array) {
  let isAsc = true,
    isDesc = true;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) isAsc = false;
    else if (array[i] < array[i + 1]) isDesc = false;
  }
  return !isAsc && !isDesc ? 'no' : isAsc ? 'yes, ascending' : 'yes, descending';
}
