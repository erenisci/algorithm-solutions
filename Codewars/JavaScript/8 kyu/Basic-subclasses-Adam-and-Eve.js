class God {
  static create() {
    return [new Man(), new Woman()];
  }
}
class Human {
  constructor(name) {
    this.name = name;
  }
}
class Man extends Human {
  constructor(name) {
    super(name);
  }
}
class Woman extends Human {
  constructor(name) {
    super(name);
  }
}
