# Even Fibonacci numbers, Problem #2
# https://projecteuler.net/problem=2


a, b = 1, 2
sum = 2
while True:
    c = a + b
    a = b
    b = c
    if c > 4000000:
        break
    if c % 2 == 0:
        sum += c
print("Sum:", sum)
