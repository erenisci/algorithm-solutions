# Lattice paths, Problem #15
# https://projecteuler.net/problem=15


import math

steps = math.factorial(40) / (math.factorial(20) * math.factorial(20))
print("Steps:", int(steps))
