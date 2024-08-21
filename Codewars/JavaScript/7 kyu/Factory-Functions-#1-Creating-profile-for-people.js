function person(firstName, lastName, age, gender, employed, occupation, married) {
  return {
    firstName: firstName,
    lastName: lastName,
    age: age,
    gender: gender,
    employed: employed,
    occupation: occupation,
    married: married,
    sayName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
    introduce: function () {
      return `Hello, my name is ${this.sayName()}.  I am ${this.age} years old.  I am a ${
        this.gender
      }.`;
    },
  };
}
