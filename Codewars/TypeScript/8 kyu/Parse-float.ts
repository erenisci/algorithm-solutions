export const parseF = (s: string): number | null => {
  return !isNaN(parseFloat(s)) ? parseFloat(s) : null;
};
