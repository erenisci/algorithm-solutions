# 345. Reverse Vowels of a String
# https://leetcode.com/problems/reverse-vowels-of-a-string/


class Solution(object):
    def reverseVowels(self, s):
        vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
        vow = ""
        for char in s:
            if char in vowels:
                vow += char
        vow = vow[::-1]

        new_str = ""
        i = 0
        for char in s:
            if char in vowels:
                new_str += vow[i]
                i += 1
            else:
                new_str += char

        return new_str
