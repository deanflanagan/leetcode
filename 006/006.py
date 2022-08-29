import enum


s = "PAYPALISHIRING"
n = 3
new = ''
# going to be the n, then 1 for n - 2, then repeat
for ind, char in enumerate(s):
    print(ind, char)
    if ind == 0:
        new += char 
    else:
        nxt = n + n - 2 - 1
        print(nxt, s[nxt])
print(new)


# print("PAHNAPLSIIGYIR")