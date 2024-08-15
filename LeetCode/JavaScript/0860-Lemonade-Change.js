// 860. Lemonade Change
// https://leetcode.com/problems/lemonade-change/description/

/**
 * @param {number[]} bills
 * @return {boolean}
 */

var lemonadeChange = function (bills) {
  let f = 0,
    t = 0;
  for (const b of bills) {
    if (b === 5) f++;
    else if (b === 10) {
      if (f >= 1) {
        f--;
        t++;
      } else return false;
    } else {
      if (f >= 1 && t >= 1) {
        t--;
        f--;
      } else if (f >= 3) f -= 3;
      else return false;
    }
  }
  return true;
};
