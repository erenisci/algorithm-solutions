# Highly divisible triangular number, Problem #12
# https://projecteuler.net/problem=12


import math


def division_numb(x):
    div = 1
    for i in range(2, int(math.sqrt(x) + 1)):
        if x % i == 0:
            div += 1
    return div * 2


n = 1
while True:
    number = (n * (n + 1)) / 2
    if division_numb(number) > 500:
        print("Num:", int(number))
        break
    n += 1
