function solution(
  molarMass1,
  molarMass2,
  givenMass1,
  givenMass2,
  volume,
  temp
) {
  const R = 0.082;
  const T = 273.15 + temp;
  return ((givenMass1 / molarMass1 + givenMass2 / molarMass2) * R * T) / volume;
}
