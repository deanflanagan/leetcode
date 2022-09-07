const orig = 'pales';
const t1 = 'oales';

const closeEdit = (orig, t1) => {
    if(Math.abs(orig.length - t1.length) > 1){
        return false
    }
    let s1 = orig.length < t1.length ? orig : t1 
    let s2 = t1.length < orig.length ? t1  : orig

    let index1 = 0
    let index2 = 0

    let foundDifference = false

    while ((index1 < s1.length) || (index2 < s2.length)) {
        if (s1.indexOf(index1) != s2.indexOf(index2)){
            if (!foundDifference) {
                foundDifference = true
                if (s1.length == s2.length){
                    index1 ++
                }
            }
            else {
                index1 ++
            }
        }
        index2 ++
    }
    
    return true
}

console.log(closeEdit(orig, t1))