# 933. Number of Recent Calls
# https://leetcode.com/problems/number-of-recent-calls/


class RecentCounter:
    def __init__(self):
        self.times = []

    def ping(self, t: int) -> int:
        self.times.append(t)

        while self.times[0] < t - 3000:
            self.times.pop(0)

        return len(self.times)
