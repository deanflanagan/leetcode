one = 'abcda'
two = 'acdaba'
def is_perm(one, two):
    d={char:one.count(char) for char in one}
    for char in two:
        if char not in d.keys() or two.count(char) != d[char]:
            return False
    return True

print(is_perm(one, two))
# ints: #7, #84, #722, #737 