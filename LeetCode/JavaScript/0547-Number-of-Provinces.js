// 547. Number of Provinces
// https://leetcode.com/problems/number-of-provinces/submissions/1905393463/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[][]} isConnected
 * @return {number}
 */

var findCircleNum = function (isConnected) {
  const n = isConnected.length;
  const visited = new Array(n).fill(false);

  function dfs(city) {
    for (let neighbor = 0; neighbor < n; neighbor++) {
      if (isConnected[city][neighbor] === 1 && !visited[neighbor]) {
        visited[neighbor] = true;
        dfs(neighbor);
      }
    }
  }

  let provinces = 0;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      dfs(i);
      provinces++;
    }
  }

  return provinces;
};
