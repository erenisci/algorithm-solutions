class Singleton {
  constructor() {
    if (Singleton.__instance) {
      return Singleton.__instance;
    }

    Singleton.__instance = this;
  }
}
