# String Rotation:Assumeyou have a method isSubstringwhich checks if oneword is a substring 
# of another. Given two strings, sl and s2, write code to check if s2 is a rotation of sl using only one 
# call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat").

s1 = 'erbottlewat'
s2 = 'waterbottle'


def string_rotation(s1, s2):
    triple_s1 = s2 + s2 +s2
    return s1 in triple_s1

print(string_rotation(s1, s2))