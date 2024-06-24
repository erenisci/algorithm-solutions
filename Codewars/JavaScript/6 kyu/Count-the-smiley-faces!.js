function countSmileys(arr) {
  return arr.filter(str => /^[:;][-~]?[)D]$/.test(str)).length;
}
