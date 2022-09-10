# Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 
# bytes, write a method to rotate the image by 90 degrees. Can you do this in place? 

A = [[1, 4, 5], 
    [-5, 8, 9],
    [3, -4, 5]]

B = [[1, 4, 5, 1], 
    [-5, 8, 9, 2],
    [3, -4, 5, 6],
    [10, 3, -1, 9]]

def rotate(arr):
    rotated = []
    turns = len(arr)
    for turn in range(turns):
        new_row = [x[turn] for x in arr]
        new_row.reverse()
        rotated.append(new_row)
    return rotated

print(rotate(B))

