# 899. Orderly Queue
# https://leetcode.com/problems/orderly-queue/


class Solution:
    def orderlyQueue(self, s: str, k: int) -> str:
        if k > 1:
            return "".join(sorted(s))
        else:
            ans = s
            for i in range(1, len(s) + 1):
                ans = min(ans, s[i : len(s)] + s[0:i])
            return ans
