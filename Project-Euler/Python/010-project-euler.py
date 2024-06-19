# Summation of primes, Problem #10
# https://github.com/nayuki/Project-Euler-solutions


from math import *


def isprime(x):
    prime = True
    if x == 2:
        return True
    else:
        for i in range(2, int(sqrt(x) + 1)):
            if x % i == 0:
                prime = False
                break
        return prime


sum = 0
for i in range(2, 2000000):
    if isprime(i):
        sum += i
print(sum)
