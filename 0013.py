
"""
    I can be placed before V (5) and X (10) to make 4 and 9.
    X can be placed before L (50) and C (100) to make 40 and 90.
    C can be placed before D (500) and M (1000) to make 400 and 900.
"""


class Solution:
    def romanToInt(self, s: str) -> int:
        ttl = 0
        odd_vals = {
            'IV':           4,
            'IX': 9,
            'XL':             40,
            'XC':            90,
            'CD':           400,
            'CM':          900
        }

        vals = {
            'I':           1,
            'III': 3,
            'V':             5,
            'X':            10,
            'L':           50,
            'C':          100,
            'D':         500,
            'M':        1000
        }

        for k in odd_vals.keys():
            if len(s.split(k)) > 0:
                ttl += (len(s.split(k)) - 1) * odd_vals[k]
                s = ''.join(s.split(k))
        for char in s:
            ttl += vals[char]
        return ttl


soln = Solution()
print(soln.romanToInt('MCMXCVI'))  # should be 1996
