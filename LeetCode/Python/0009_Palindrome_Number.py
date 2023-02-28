# 9. Palindrome Number
# https://leetcode.com/problems/palindrome-number/submissions/


class Solution:
    def isPalindrome(self, x: int) -> bool:
        given = str(x)
        if given == given[::-1]:
            return True
        else:
            return False
