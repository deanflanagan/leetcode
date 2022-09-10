s = 'Tact Coa'

def is_perm_palin(orig):
    orig_no_space = orig.replace(' ','').lower()
    d={char:orig_no_space.count(char) for char in orig_no_space}
    odd_chars = sum([(z % 2 == 1) for z in d.values()])
    if odd_chars <=1:
        return True # is palindrome
    return False

print(is_perm_palin('atco cta'))