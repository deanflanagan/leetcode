orig = 'pale'
# t1 = 'pales'
# t2 = 'pales'
t3 = 'bake'

def close_edit(orig, new):
    if (len(new) -  len(orig))**2 <=1: # len hasn't changed too much
        if sum([True for x in new if x in orig]) >= len(orig) -1 :
            return True
    return False

print(close_edit(orig, t3))

