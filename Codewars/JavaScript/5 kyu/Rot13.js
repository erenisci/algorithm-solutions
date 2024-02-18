function rot13(message) {
  const arr = [...message].map(el => {
    if (65 <= el.charCodeAt() && el.charCodeAt() <= 90) {
      return el.charCodeAt() + 13 > 90 ? el.charCodeAt() - 13 : el.charCodeAt() + 13;
    } else if (97 <= el.charCodeAt() && el.charCodeAt() <= 122) {
      return el.charCodeAt() + 13 > 122 ? el.charCodeAt() - 13 : el.charCodeAt() + 13;
    } else return el.charCodeAt();
  });

  return String.fromCharCode(...arr);
}
