class Solution:
    def longestCommonPrefix(self, strs: list[str]) -> str:

        if len(strs) == 0:
            return ""
        else:
            shortest_word = min(strs, key = len)

            for ind in reversed(range(1,len(shortest_word)+1)):
                if all([y.startswith(shortest_word[:ind]) for y in strs ]):
                    return shortest_word[:ind]
            return ""

x = Solution()
print(x.longestCommonPrefix(strs=["flower","flow","flight"]))
print(x.longestCommonPrefix(strs=[]))
print(x.longestCommonPrefix(strs=["ft"]))

# x = ["flower","flow","flight"]




        