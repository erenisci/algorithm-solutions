function describeAge(age) {
  return (
    `You're a(n) ` + (age < 13 ? 'kid' : age < 18 ? 'teenager' : age < 65 ? 'adult' : 'elderly')
  );
}
