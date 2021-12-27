class Solution:
    def isPalindrome(self, x: int) -> bool:
        res = True
        if (x >= 0) and (str(x)[::-1] == str(x)):
            res = True
        else:
            res = False
        return res


soln = Solution()
test = -121
soln.isPalindrome(test)
