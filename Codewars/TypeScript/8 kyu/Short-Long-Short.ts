export const shortLongShort = (a: string, b: string): string => {
  return a.length < b.length ? a + b + a : b + a + b;
};
