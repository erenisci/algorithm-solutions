function fuelPrice(litres, pricePerLitre) {
  const discount = litres > 10 ? 0.25 : Math.floor(litres / 2) * 0.05;
  return +(litres * pricePerLitre - discount * litres).toFixed(2);
}
