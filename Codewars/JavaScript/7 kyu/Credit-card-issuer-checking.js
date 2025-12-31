function getIssuer(number) {
  const cardTypes = [
    { type: 'AMEX', prefix: ['34', '37'], length: [15] },
    { type: 'Discover', prefix: ['6011'], length: [16] },
    { type: 'Mastercard', prefix: ['51', '52', '53', '54', '55'], length: [16] },
    { type: 'VISA', prefix: ['4'], length: [13, 16] },
  ];
  number += '';
  for (let i in cardTypes)
    if (
      cardTypes[i].prefix.some(v => {
        return number.startsWith(v);
      }) &&
      cardTypes[i].length.some(v => {
        return number.length == v;
      })
    )
      return cardTypes[i].type;
  return 'Unknown';
}
