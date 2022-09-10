# Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and 
# column are set to 0. 
t2 = [[1, 4, 5, 1],     [-5, 8, 0, 2],    [10, 3, -1, 9]]
def zero_matrix(matrix):
    rows = [False for x in matrix]
    cols = [False for y in matrix[0]]
    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            if matrix[i][j] == 0:
                rows[i] = True
                cols[j] = True
    for row_ind, row_bool in enumerate(rows):
        if row_bool:
            matrix[row_ind] = [0 for x in matrix[row_ind]]
        for col_ind,col_bool in enumerate(cols):
            if col_bool:
                matrix[row_ind][col_ind] = 0
    return matrix

zero_matrix(matrix=t2)