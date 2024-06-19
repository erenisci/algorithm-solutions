# Special Pythagorean triplet, Problem #9
# https://projecteuler.net/problem=9


done = False
for a in range(1, 1000):
    for b in range(1, 1000 - a):
        c = 1000 - a - b
        if a * a + b * b == c * c:
            print("A*B*C (while A+B+C=1000):", a * b * c)
            done = True
            break
    if done == True:
        break
