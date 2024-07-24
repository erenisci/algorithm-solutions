function convertToCelsius(temperature) {
  const celsius = ((temperature - 32) * 5) / 9;
  return celsius;
}

function weatherInfo(temperature) {
  const c = convertToCelsius(temperature);
  if (c < 0) return c + ' is freezing temperature';
  else return c + ' is above freezing temperature';
}
