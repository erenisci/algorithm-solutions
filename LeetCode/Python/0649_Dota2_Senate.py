# 649. Dota2 Senate
# https://leetcode.com/problems/dota2-senate/


class Solution:
    def predictPartyVictory(self, senate: str) -> str:
        n = len(senate)
        radiant = []
        dire = []

        for i, s in enumerate(senate):
            if s == 'R':
                radiant.append(i)
            else:
                dire.append(i)

        while radiant and dire:
            r = radiant.pop(0)
            d = dire.pop(0)

            if r < d:
                radiant.append(r + n)
            else:
                dire.append(d + n)

        return "Radiant" if radiant else "Dire"
