function Person() {
  const person = {
    _name: 'Leroy',
    _friends: [],
    fillFriends(f) {
      this._friends.push(...f);
    },
  };
  return person;
}
