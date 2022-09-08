const A = [[1, 4, 5], 
    [-5, 8, 9],
    [3, -4, 5]]

const B = [[1, 4, 5, 1], 
    [-5, 8, 9, 2],
    [3, -4, 5, 6],
    [10, 3, -1, 9]]

const rotate = (matrix) => {
    let rotatedArr = [];
    for (let i = matrix.length -1; i >= 0; i --){
        let newRow = matrix.map((row) => row[i])
        rotatedArr.push(newRow)
    }
    return rotatedArr
}

console.log(rotate(B))

rotate(B)