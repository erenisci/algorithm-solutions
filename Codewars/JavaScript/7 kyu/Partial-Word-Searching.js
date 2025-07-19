function wordSearch(query, seq) {
  const result = seq.filter(word => word.toLowerCase().includes(query.toLowerCase()));
  return result.length > 0 ? result : ['Empty'];
}
