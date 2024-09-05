var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    if (!count) return '0=0';
    else if (count < 0) return `${count}<0`;

    let str = '',
      total = 0;
    for (let i = 0; i <= count; i++) {
      total += i;
      if (i === count) str += `${i} = ${total}`;
      else str += `${i}+`;
    }
    return str;
  };

  return SequenceSum;
})();
