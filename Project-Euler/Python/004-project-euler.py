# Largest palindrome product, Problem #4
# https://projecteuler.net/problem=4


def check_palindrome(x):
    x = str(x)
    reverse_x = x[::-1]
    if x == reverse_x:
        return True
    else:
        return False


big_palindrome = 0
for i in range(100, 1000):
    for j in range(100, 1000):
        if check_palindrome(i * j) and i * j > big_palindrome:
            big_palindrome = i * j
print("Biggest palindrome:", big_palindrome)
