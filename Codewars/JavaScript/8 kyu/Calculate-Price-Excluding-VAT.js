function excludingVatPrice(price) {
  return price !== null ? +(price / 1.15).toFixed(2) : -1;
}
