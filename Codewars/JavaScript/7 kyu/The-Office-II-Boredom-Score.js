function boredom(staff) {
  const points = {
    'accounts': 1,
    'finance': 2,
    'canteen': 10,
    'regulation': 3,
    'trading': 6,
    'change': 6,
    'IS': 8,
    'retail': 5,
    'cleaning': 4,
    'pissing about': 25,
  };

  let result = 0;
  for (const [key, value] of Object.entries(staff)) {
    result += points[value];
  }
  return result <= 80 ? 'kill me now' : result < 100 ? 'i can handle this' : 'party time!!';
}
