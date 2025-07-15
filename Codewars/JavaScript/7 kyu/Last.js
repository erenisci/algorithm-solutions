function last(...args) {
  const item = args.length === 1 ? args[0] : args;
  return Array.isArray(item) || typeof item === 'string' ? item[item.length - 1] : item;
}
