function Dog(breed) {
  this.breed = breed;
}

Dog.prototype.bark = function () {
  return 'Woof';
};

const snoopy = new Dog('Beagle');
const scoobydoo = new Dog('Great Dane');
