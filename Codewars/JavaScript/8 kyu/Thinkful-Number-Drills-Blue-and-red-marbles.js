function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  return (blueStart - bluePulled) / (redStart - redPulled + blueStart - bluePulled);
}
