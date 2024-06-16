# Largest prime factor, Problem #3
# https://projecteuler.net/problem=3


import math


def prime_check(x):
    is_prime = True
    for i in range(2, int(math.sqrt(x) + 1)):
        if x % i == 0:
            is_prime = False
            continue
    return is_prime


n = 600851475143
for i in range(2, int(math.sqrt(n)) + 1):
    if n % i == 0 and prime_check(i):
        biggest_prime = i
print("Biggest prime:", biggest_prime)
