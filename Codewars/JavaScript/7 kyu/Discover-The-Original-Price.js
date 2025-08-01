function discoverOriginalPrice(discountedPrice, salePercentage) {
  return +((discountedPrice * 100) / (100 - salePercentage)).toFixed(2);
}
