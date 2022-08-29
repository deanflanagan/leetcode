
tests = ['abcabcbb','cdd','abxbiceb']

class Solution:
    def lengthOfLongestSubstring(self, s):
        max_length = 0
        start = 0
        seen_chars = {}

        for i, c in enumerate(s):
            if c in seen_chars and start <= seen_chars[s[i]]:
                print(c, i, start, max_length)
                start = seen_chars[s[i]] + 1
            else:
                max_length = max(max_length, i - start + 1)
            seen_chars[s[i]] = i
        
        return max_length


for test in tests:
    soln = Solution()
    print(soln.lengthOfLongestSubstring(test))