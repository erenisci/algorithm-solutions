// 1431. Kids With the Greatest Number of Candies
// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies);
  const result = [];
  for (const candy of candies) {
    if (candy + extraCandies >= max) result.push(true);
    else result.push(false);
  }
  return result;
};
