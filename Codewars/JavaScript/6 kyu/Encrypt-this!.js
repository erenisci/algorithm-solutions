function encryptThis(text) {
  return text
    .split(' ')
    .map(
      word =>
        word.charCodeAt(0) +
        (word.length < 2
          ? ''
          : word.length < 3
          ? word[1]
          : word[word.length - 1] + word.slice(2, -1) + word[1])
    )
    .join(' ');
}
