# Longest Collatz sequence, Problem #14
# https://projecteuler.net/problem=14


def collatz(number, past_numbers):
    given = number
    steps = 1
    while number != 1:
        if number in past_numbers:
            steps += past_numbers[number] - 1
            break
        if number % 2 == 0:
            number //= 2
            steps += 1
        else:
            number = number * 3 + 1
            steps += 1
        past_numbers[given] = steps
    return steps


past_numbers = dict()
number = 1
chain = 1
for i in range(1, 1000000):
    move_count = collatz(i, past_numbers)
    if move_count > chain:
        chain = move_count
        number = i
print(f"Max chain is: {chain} \nMax number is: {number}")
