function HQ9(code) {
  switch (code) {
    case 'H':
      return 'Hello World!';
    case 'Q':
      return code;
    case '9':
      return beer(99);
    default:
      return undefined;
  }
}

function beer(count) {
  if (count === 2) {
    return (
      '2 bottles of beer on the wall, 2 bottles of beer.\n' +
      'Take one down and pass it around, 1 bottle of beer on the wall.\n' +
      '1 bottle of beer on the wall, 1 bottle of beer.\n' +
      'Take one down and pass it around, no more bottles of beer on the wall.\n' +
      'No more bottles of beer on the wall, no more bottles of beer.\n' +
      'Go to the store and buy some more, 99 bottles of beer on the wall.'
    );
  } else {
    return (
      `${count} bottles of beer on the wall, ${count} bottles of beer.\n` +
      `Take one down and pass it around, ${
        count - 1
      } bottles of beer on the wall.\n` +
      beer(count - 1)
    );
  }
}
