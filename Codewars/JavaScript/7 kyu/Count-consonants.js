function consonantCount(str) {
  return (str.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length;
}
