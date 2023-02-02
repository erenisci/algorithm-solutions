# Multiples of 3 or 5, Problem #1
# https://projecteuler.net/problem=1


list = [i for i in range(1000) if i % 3 == 0 or i % 5 == 0]
print("Sum:", sum(list))
