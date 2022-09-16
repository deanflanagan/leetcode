orig = 'pales'
t3 = 'vales'

def one_away(first, second):
    if (len(first) - len(second))**2 > 1:
        return False
    
    first_word = first if len(first) < len(second) else first 
    second_word = first if len(first) > len(second) else second

    d = {
        -1 : lambda x : x  - 1,
        0 : lambda x : x ,
        1 : lambda x : x  + 1,
    }

    differences ,first_index, second_index = 0,0,0
    # # get shorter word or just use first
    # for ind in range(len(second_word)):
    #     if first_word[first_index] != second_word[second_index]:
    #         second_index+=1
    #         differences+=1
    #     else:
    #         second_index+=1
    #         first_index+=1
    #     print(differences)
            
            # first_index +=1
    return 

print(one_away(orig, t3))
