// 2706. Buy Two Chocolates
// https://leetcode.com/problems/buy-two-chocolates/

/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */

var buyChoco = function (prices, money) {
  prices.sort((a, b) => a - b);
  let rest = money - (prices[0] + prices[1]);
  return rest < 0 ? money : rest;
};
