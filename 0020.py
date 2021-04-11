class Solution:
    def isValid(self, s: str) -> bool:

        closers = {'(': ')',
                   '[': ']',
                   '{': '}'}
        priority_closers = []
        loops = 0

        for char in s:
            if len(priority_closers) > 0 and priority_closers[0] == char:
                del priority_closers[0]
            else:
                try:
                    priority_closers.insert(0, closers[char])
                except KeyError:
                    break
            loops += 1
        print(False if len(priority_closers) >
              0 or loops < len(s) or len(s) == 1 else True)
        return False if len(priority_closers) > 0 or loops < len(s) or len(s) == 1 else True


x = Solution()
for string in ['(){}}{', "]", "((", "(", "()", "()[]{}", "(]", "([)]", "{[]}"]:
    x.isValid(string)
