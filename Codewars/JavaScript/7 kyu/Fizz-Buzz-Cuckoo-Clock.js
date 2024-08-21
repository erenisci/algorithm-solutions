function fizzBuzzCuckooClock(time) {
  const [hours, minutes] = time.split(':').map(Number);
  if (minutes === 0) {
    const hourSound = hours % 12 === 0 ? 12 : hours % 12;
    return 'Cuckoo '.repeat(hourSound).trim();
  } else if (minutes === 30) {
    return 'Cuckoo';
  } else if (minutes % 3 === 0 && minutes % 5 === 0) {
    return 'Fizz Buzz';
  } else if (minutes % 3 === 0) {
    return 'Fizz';
  } else if (minutes % 5 === 0) {
    return 'Buzz';
  } else {
    return 'tick';
  }
}
