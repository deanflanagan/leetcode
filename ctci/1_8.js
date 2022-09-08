const matrix = t2 = [[1, 4, 5, 1],     [-5, 8, 0, 2],    [10, 3, -1, 9]];

const setZeros = (matrix) => {
    let rowHasZero = false;
    let colHasZero = false;
    
    // check if first row has a 0
    for(let i = 0; i < matrix[0].length; i++){
        if(matrix[0][i] == 0){
            rowHasZero = true;
            break
        }
    }
    // check if first col has a 0
    for(let j = 0; j < matrix.length; j++){
        if(matrix[0][j] ==0){
            colHasZero = 0;
            break
        }
    }
    // check for zeroes in rest of the array
    for (let i = 1; i < matrix.length;i++){
        for (let j = 1; j < matrix[0].length;j++){
            if(matrix[i][j] == 0){
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    // nullify rows based on values in first column
    for(let i = 1; i < matrix.length; i++){
        if(matrix[i][0] == 0){
            nullifyRow(matrix, i)
        }
    }

}

setZeros(matrix)