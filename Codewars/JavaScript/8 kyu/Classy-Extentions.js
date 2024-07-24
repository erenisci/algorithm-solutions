class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    return `${this.name} meows.`;
  }
}
