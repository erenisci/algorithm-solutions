function bandNameGenerator(str) {
  const capitalized = str[0].toUpperCase() + str.slice(1);

  if (str[0] === str[str.length - 1]) return capitalized + str.slice(1);

  return `The ${capitalized}`;
}
