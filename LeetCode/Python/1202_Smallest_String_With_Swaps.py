# 1202. Smallest String With Swaps
# https://leetcode.com/problems/smallest-string-with-swaps/


class Solution:
    def smallestStringWithSwaps(self, s: str, pairs: list[list[int]]) -> str:
        n = len(s)
        parent = list(range(n))

        def find(x):
            if parent[x] != x:
                parent[x] = find(parent[x])
            return parent[x]

        for a, b in pairs:
            parent[find(a)] = find(b)

        from collections import defaultdict
        groups = defaultdict(list)

        for i in range(n):
            groups[find(i)].append(i)

        s = list(s)
        for idxs in groups.values():
            chars = sorted(s[i] for i in idxs)
            for i, c in zip(sorted(idxs), chars):
                s[i] = c

        return "".join(s)