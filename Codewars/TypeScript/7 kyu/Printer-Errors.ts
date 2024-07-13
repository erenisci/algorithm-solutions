export const printerError = (s: string): string => {
  return `${s.split('').reduce((acc, cur) => acc + (cur > 'm' ? 1 : 0), 0)}/${
    s.length
  }`;
};
