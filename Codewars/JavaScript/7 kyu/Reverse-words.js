function reverseWords(str) {
  let array = str.split(' ');
  let newText = '';
  for (let i = 0; i < array.length; i++) {
    newText += array[i].split('').reverse().join('') + ' ';
  }
  return newText.slice(0, -1);
}
