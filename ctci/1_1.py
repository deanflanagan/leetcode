# 1.1 check if a string has all unique characters

s = 'alsdjfalkdjfoiajo' # false
t = 'asdfj' # true

def unique(string):
    d = {}
    for char in string:
        if char not in d.keys():
            d[char] = None
        else:
            return False
    return True

    

# print(unique_no_structures(t))