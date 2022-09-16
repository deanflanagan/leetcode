// one edit away

let one = 'pales'
let two = 'ples'
let three = 'bales'
let four = 'scales'
let five = 'alees'

const oneAway = (str1, str2) => {
    // break it into 2 steps: the replacement and the insertion/removal. First check replacement if they're the same length. if not, check insert/remove
    const diff = Math.abs(str1.length - str2.length)
    // console.log(diff)
    if(diff > 1){
        return false
    }
    let differences = 0;
    if(diff === 0){
        for(let i = 0; i < str1.length; i++){
            if(str1[i] != str2[i]){
                console.log(differences)
                differences++;
                if(differences>1){
                    return false
                }
            }
        }
    }
    else {
        let index1 = 0;
        let index2 = 0;
        while(index1 < str1.length && index2 < str2.length){
            if(str1[index1] != str2[index2]){
                if(str1[index1+1] === str2[index2] && index1+1 < str1.length){
                    index1++;
                }
                else{
                    index2++;
                }
                differences++;
                console.log(differences)
            }
            index1++;
            index2++;
        }
    }
    return true
}
console.log(oneAway( five, one))
