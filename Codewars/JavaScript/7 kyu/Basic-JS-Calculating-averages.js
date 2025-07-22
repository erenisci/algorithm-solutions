var Calculator = {
  average: function () {
    const numbers = Array.from(arguments);
    if (numbers.length === 0) return 0;
    return numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
  },
};
