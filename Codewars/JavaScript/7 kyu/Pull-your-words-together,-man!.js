function sentencify(words) {
  return `${words[0][0].toUpperCase()}${words.join(` `).slice(1)}.`;
}
