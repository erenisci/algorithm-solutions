function isValid(formula) {
  const materials = new Set(formula);
  if (materials.has(1) && materials.has(2)) return false;
  if (materials.has(3) && materials.has(4)) return false;
  if (materials.has(5) !== materials.has(6)) return false;
  if (!materials.has(7) && !materials.has(8)) return false;
  return true;
}
