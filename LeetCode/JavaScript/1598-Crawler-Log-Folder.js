// 1598. Crawler Log Folder
// https://leetcode.com/problems/crawler-log-folder/description/

/**
 * @param {string[]} logs
 * @return {number}
 */

var minOperations = function (logs) {
  let result = 0;
  for (const directory of logs) {
    if (directory === './') continue;
    else if (directory === '../') result ? result-- : (result = 0);
    else result++;
  }
  return result;
};
