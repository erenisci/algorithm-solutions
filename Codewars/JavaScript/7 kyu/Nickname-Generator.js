function nicknameGenerator(name) {
  if (name.length <= 3) return 'Error: Name too short';
  return /[aeiou]/.test(name[2]) ? name.substring(0, 4) : name.substring(0, 3);
}
