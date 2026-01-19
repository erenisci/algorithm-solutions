# 399. Evaluate Division
# https://leetcode.com/problems/evaluate-division/


from collections import defaultdict


class Solution:
    def calcEquation(self, equations: list[list[str]], values: list[float], queries: list[list[str]]) -> list[float]:
        graph: dict[str, dict[str, float]] = defaultdict(dict)

        for (a, b), value in zip(equations, values):
            graph[a][b] = value
            graph[b][a] = 1.0 / value

        def dfs(curr: str, target: str, visited: set) -> float:
            if curr == target:
                return 1.0

            visited.add(curr)

            for neighbor, weight in graph[curr].items():
                if neighbor in visited:
                    continue

                result = dfs(neighbor, target, visited)
                if result != -1.0:
                    return weight * result

            return -1.0

        results = []

        for src, dst in queries:
            if src not in graph or dst not in graph:
                results.append(-1.0)
            else:
                results.append(dfs(src, dst, set()))

        return results
