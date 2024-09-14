// 1732. Find the Highest Altitude
// https://leetcode.com/problems/find-the-highest-altitude/description/

/**
 * @param {number[]} gain
 * @return {number}
 */

var largestAltitude = function (gain) {
  let altitude = 0,
    biggest = 0;
  for (let i = 0; i < gain.length; i++) {
    altitude += gain[i];
    if (altitude > biggest) biggest = altitude;
  }
  return biggest;
};
