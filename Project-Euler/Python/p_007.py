# 10001st prime, Problem #7
# https://projecteuler.net/problem=7


import math


def prime_check(x):
    is_prime = True
    for i in range(2, int(math.sqrt(x) + 1)):
        if x % i == 0:
            is_prime = False
            continue
    return is_prime


i = 2
prime_count = 0
while True:
    if prime_check(i):
        prime_count += 1
    if prime_count == 10001:
        print("10001st prime:", i)
        break
    i += 1
