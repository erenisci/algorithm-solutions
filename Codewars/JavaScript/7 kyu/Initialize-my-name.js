function initializeNames(name) {
  const parts = name.trim().split(/\s+/);

  if (parts.length <= 2) return name;

  return [parts[0], ...parts.slice(1, -1).map(n => n[0] + '.'), parts[parts.length - 1]].join(' ');
}
