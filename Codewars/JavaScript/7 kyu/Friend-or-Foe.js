function friend(friends) {
  let myFriends = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4 && isNaN(friends[i])) {
      myFriends.push(friends[i]);
    }
  }
  return myFriends;
}
