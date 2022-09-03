s = "PAYPALISHIRING"
n = 4
addition = n - 2
new = ''

for row in range(n):
    if row == 0 or row == n-1:
        new += s[row::n+addition]
    else:
        new += s[row::n-addition]
print(new)

# print(s[0::n+1])
# print(s[1::n-1])
# print(s[2::n+1])
# print("PAHNAPLSIIGYIR")

# n = 4

# print(s[0::n+2])
# print(s[1::n-2])
# print(s[2::n-2])
# print(s[3::n+2])

# res = "PINALSIGYAHRPI"