function password(str) {
  return /[A-Z]/.test(str) && /[a-z]/.test(str) && /[0-9]/.test(str) && str.length >= 8;
}
