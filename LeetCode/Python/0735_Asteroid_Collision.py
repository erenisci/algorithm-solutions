# 735. Asteroid Collision
# https://leetcode.com/problems/asteroid-collision/


class Solution:
    def asteroidCollision(self, asteroids: list[int]) -> list[int]:
        stack = []

        for ast in asteroids:
            while stack and ast < 0 < stack[-1]:
                if stack[-1] < -ast:
                    stack.pop()
                    continue
                elif stack[-1] == -ast:
                    stack.pop()
                break
            else:
                stack.append(ast)

        return stack
