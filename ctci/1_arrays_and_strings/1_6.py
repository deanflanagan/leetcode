# aabcccccaaa
# a2blc5a3

def compressor(string):
    breaks = 1
    strings = []
    current_char = string[0]
    last_index_stop = 0
    for i in range(len(string)):    
        if current_char != string[i]:
            strings.append(current_char + str(i - last_index_stop))
            current_char = string[i]
            last_index_stop = i
            breaks += 1
    
    if breaks > len(string):
        return string
    strings.append(current_char+ str(len(string) - last_index_stop))
    return ''.join(strings)

print(compressor(string='aabcccccaaa'))