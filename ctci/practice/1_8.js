// Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and 
// column are set to 0. 
// Hints:#17, #74, #702

const mat = [[1,2,4,6],
            [3,6,3,6],
            [5,7,5,7],
            [7,0,7,9]]

const zeroMatrix = (matrix) => {
    let row = new Array(matrix.length).fill(false)
    let col = new Array(matrix[0].length).fill(false)

    for(let r in row){
        for(let c in col){
            if(matrix[r][c] === 0){
                row[r] = true
                col[c] = true
            }
        }
    }

    for(let r=0;r < row.length; r++){
        if(row[r]){
            matrix[r] = new Array(matrix[r].length).fill(0)
        }
    }

    for(let c=0;c<col.length;c++){
        if(col[c]){
            for(let nullRow in matrix){
                matrix[nullRow][c] = 0
            }
        }
    }   
}

zeroMatrix(mat)