# Smallest multiple, Problem #5
# https://projecteuler.net/problem=5


import math
import functools


def lcm(x, y):
    return (x * y) // math.gcd(x, y)


list = range(1, 21)
result = functools.reduce(lcm, list)
print("Result:", result)
