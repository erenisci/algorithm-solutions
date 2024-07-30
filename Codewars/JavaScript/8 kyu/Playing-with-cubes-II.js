class Cube {
  constructor(side) {
    this.setSide(side);
  }

  getSide() {
    return this.side;
  }

  setSide(side = 0) {
    this.side = Math.abs(side);
  }
}
