function howManydays(month) {
  switch (month) {
    case 2:
      return 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 5:
    case 1:
    case 3:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
  }
}
