s = 'abcabcbb'

for x in set(s):
    # this is the first index for each unique character. Each substring from here must then be split by that same character
    print('char is ',x, '   ', s[s.index(x):])
