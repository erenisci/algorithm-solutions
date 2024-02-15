# 953. Verifying an Alien Dictionary
# https://leetcode.com/problems/verifying-an-alien-dictionary/


class Solution:
    def isAlienSorted(self, words: list[str], order: str) -> bool:
        alph = {}
        for i in range(len(order)):
            alph[order[i]] = i
        length = len(words) - 1
        for i in range(length):
            res = self.compare(words[i], words[i + 1], alph)
            if res == False:
                return False
        return True

    def compare(self, w1: str, w2: str, alph: dict) -> bool:
        length = min(len(w1), len(w2))
        for i in range(length):
            if alph[w1[i]] != alph[w2[i]]:
                if alph[w1[i]] > alph[w2[i]]:
                    return False
                else:
                    return True
        if len(w1) > len(w2):
            return False
        return True
