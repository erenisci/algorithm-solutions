// 2665. Counter II
// https://leetcode.com/problems/counter-ii/

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

var createCounter = function (init) {
  let main = init;
  return {
    increment: () => ++main,
    decrement: () => --main,
    reset: () => (main = init),
  };
};
