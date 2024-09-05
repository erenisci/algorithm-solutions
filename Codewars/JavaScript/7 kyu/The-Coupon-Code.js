function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return enteredCode !== correctCode
    ? false
    : new Date(currentDate) <= new Date(expirationDate)
    ? true
    : false;
}
