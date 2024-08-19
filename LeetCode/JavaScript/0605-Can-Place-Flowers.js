// 605. Can Place Flowers
// https://leetcode.com/problems/can-place-flowers/description/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

var canPlaceFlowers = function (flowerbed, n) {
  flowerbed = [0, ...flowerbed, 0];
  for (let i = 0; i < flowerbed.length - 2; i++) {
    if (!flowerbed[i] && !flowerbed[i + 1] && !flowerbed[i + 2]) {
      flowerbed[i + 1] = 1;
      n--;
    }
    if (!n) return true;
  }
  return n <= 0;
};
