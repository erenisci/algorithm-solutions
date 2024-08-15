function whoIsPaying(name) {
  return name.length > 2 ? [name, name.substring(0, 2)] : [name];
}
