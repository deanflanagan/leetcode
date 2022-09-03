tests = ['cdd']

def lengthOfLongestSubstring(s):
    if len(set(s)) == len(s):
        return len(set(s))

    def find(s, ch):
        return [i for i, ltr in enumerate(s) if ltr == ch]
    # max_len_so_far = 0
    potentials = []

    # you might have to reverse it too as the char could appear at end of s and be missed. only looking from start now
    for x in set(s):
        occurrences = find(s, x)
        print(x, occurrences)
        seen_chars = []
        for enum, ind in enumerate(occurrences):
            pass

    
    return


print(lengthOfLongestSubstring(tests[0]))