test = 1534236469

class Solution:
    def reverse(self, x: int) -> int:      
        numstring = str(x)
        if numstring[0] == '-':
            res = int(numstring.strip('-')[::-1]) * -1
        else:
            res = int(numstring[::-1]) 
        if (res > -2**31)  and  (res < (2**31) -1):
            return res
        else:
            return 0 
        



soln = Solution()
print(soln.reverse(test))