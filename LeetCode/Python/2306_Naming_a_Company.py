# 2306. Naming a Company
# https://leetcode.com/problems/naming-a-company/description/


from collections import defaultdict


class Solution:
    def distinctNames(self, ideas: list[str]) -> int:
        dict, ans = defaultdict(set), 0

        for idea in ideas:
            dict[idea[0]].add(idea[1:])
        d = sorted(dict.items())

        for init1, suff1 in d:
            for init2, suff2 in d:
                if init2 >= init1:
                    break
                c = len(suff1 & suff2)
                ans += (len(suff1) - c) * (len(suff2) - c)

        return ans * 2
