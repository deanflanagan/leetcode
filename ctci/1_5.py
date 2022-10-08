# EXAMPLE
# ->
# pales, pale -> true
# pale, bale ->true
# pale, bake ->false
# pale, ple > true
# nts:#23, can you check separately 
# #97, whats the relationship between insert and remove? do they need to be separate checks?
#  #130 can you do all 3 checks in a single pass?

orig= 'pale'
test = 'ppale'
# test = 'pal'

def one_away(original, new):
    len_diff = len(new) - len(original)
    if len_diff**2 <= 1:
        for char in new:
            # print(original.index(char) + len_diff == new.index(char))
            # print(original.index(char) - len_diff == new.index(char))
            print('***')
    return #len_diff

print(one_away(orig, test))
